import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Card, Dimmer, Loader } from "semantic-ui-react";
import { Link } from "@reach/router";

const GET_CONSTRUCTORS = gql`
  {
    Circuit(filter: { AND: [{ length_gt: 5.3 }, { length_lt: 5.6 }] }) {
      circuitId
      url
      circuitName
      country
      length
    }
  }
`;

const SimiliarConstructors = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  const { loading, error, data } = useQuery(GET_CONSTRUCTORS, {
    variables: {
      wins: driver.wins,
      podiums: driver.podiums,
      nationality: driver.nationality,
      name: driver.name
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
        {data.Driver.map(item => (
          <Link
            key={item.givenName}
            to={"/drivers/" + item.driverId}
            state={{ item }}
          >
            <Card style={{ marginLeft: 20, marginTop: 20 }}>
              <img src={item.url} height={300} />
              <Card.Content>
                <Card.Header>{item.givenName}</Card.Header>
                <Card.Meta>
                  <span>{item.givenName}</span>
                  <span>{item.familyName}</span>
                  <span>{item.permanentNumber}</span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Link>
        ))}
      </ItemsCarousel>
    </div>
  );
};

export default SimiliarConstructors;
