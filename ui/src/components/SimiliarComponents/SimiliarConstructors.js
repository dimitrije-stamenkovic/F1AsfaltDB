import React from "react";

import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Card, Dimmer, Loader } from "semantic-ui-react";
import { Link } from "@reach/router";

const GET_CONSTRUCTORS = gql`
  query GET_CIRCUITS($nationality: String, $name: String) {
    Constructor(
      filter: { AND: [{ nationality: $nationality }, { name_not: $name }] }
    ) {
      constructorId
      url
      name
      chassis
      nationality
    }
  }
`;

const SimiliarConstructors = ({ constructor }) => {
  const chevronWidth = 40;

  const { loading, error, data } = useQuery(GET_CONSTRUCTORS, {
    variables: {
      nationality: constructor.nationality,
      name: constructor.name
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
      {data.Constructor.length === 0 ? (
        <p>There is no constructors with same nationality</p>
      ) : (
        <div>
          <Card.Group>
            {data.Constructor.map(item => (
              <Link
                key={item.name}
                to={"/constructors/" + item.constructorId}
                state={{ item }}
              >
                <Card style={{ marginLeft: 20, marginTop: 20 }}>
                  <img src={item.url} height={300} alt={item.name} />
                  <Card.Content>
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Meta>
                      <span>{item.nationality}</span>
                    </Card.Meta>
                  </Card.Content>
                </Card>
              </Link>
            ))}
          </Card.Group>
        </div>
      )}
    </div>
  );
};

export default SimiliarConstructors;
