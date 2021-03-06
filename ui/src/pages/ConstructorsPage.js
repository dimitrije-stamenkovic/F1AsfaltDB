import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Card, Dimmer, Loader } from "semantic-ui-react";

import { Link } from "@reach/router";

const GET_CONSTRUCTORS = gql`
  {
    Constructor {
      constructorId
      url
      name
      chassis
      nationality
      drivers {
        Driver {
          givenName
          familyName
        }
      }
    }
  }
`;

const ConstructorsPage = () => {
  const { loading: loading3, data: data3 } = useQuery(GET_CONSTRUCTORS);

  if (loading3)
    return (
      <Dimmer active inverted>
        <Loader inverted content="Loading" />
      </Dimmer>
    );

  return (
    <Card.Group style={{ marginLeft: 120, marginTop: 30 }}>
      {" "}
      {data3.Constructor.map(item => (
        <Link key={item.name} to={item.constructorId} state={{ item }}>
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
  );
};

export default ConstructorsPage;
