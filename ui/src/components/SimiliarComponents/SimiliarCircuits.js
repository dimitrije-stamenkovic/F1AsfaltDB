import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Card, Dimmer, Loader } from "semantic-ui-react";
import { Link } from "@reach/router";

const GET_CIRCUITS = gql`
  query GET_CIRCUITS($limit1: Float, $limit2: Float, $name: String) {
    Circuit(
      filter: {
        AND: [
          { length_gt: $limit1 }
          { length_lt: $limit2 }
          { circuitName_not: $name }
        ]
      }
    ) {
      circuitId
      url
      circuitName
      country
      length
    }
  }
`;

const SimiliarCircuits = ({ circuit }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  const { loading, error, data } = useQuery(GET_CIRCUITS, {
    variables: {
      limit1: circuit.length - 0.3,
      limit2: circuit.length + 0.3,
      name: circuit.name
    }
  });

  if (loading)
    return (
      <Dimmer active inverted>
        <Loader inverted content="Loading" />
      </Dimmer>
    );
  if (error) return `Error! ${error}`;

  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      {data.Circuit.length === 0 ? (
        "This circuit is unique"
      ) : (
        <ItemsCarousel
          infiniteLoop
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={3}
          gutter={20}
          leftChevron={<button>{"<"}</button>}
          rightChevron={<button>{">"}</button>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          {data.Circuit.map(item => (
            <Link
              key={item.circuitName}
              to={"/circuits/" + item.circuitId}
              state={{ item }}
            >
              <Card style={{ marginLeft: 20, marginTop: 20 }}>
                <img src={item.url} height={300} alt={item.circuitName} />
                <Card.Content>
                  <Card.Header>{item.circuitName}</Card.Header>
                  <Card.Meta>
                    <span>{item.country}</span>
                  </Card.Meta>
                </Card.Content>
              </Card>
            </Link>
          ))}
        </ItemsCarousel>
      )}
    </div>
  );
};

export default SimiliarCircuits;
