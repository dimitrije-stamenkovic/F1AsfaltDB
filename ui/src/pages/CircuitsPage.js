import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Card, Dimmer, Loader, Image, Segment } from "semantic-ui-react";

import { Link } from "@reach/router";

const GET_CIRCUITS = gql`
  {
    Circuit {
      circuitId
      url
      circuitName
      country
      length
    }
  }
`;

const CircuitsPage = () => {
  const { loading: loading1, data: data1, refetch: refetch1 } = useQuery(
    GET_CIRCUITS
  );
  if (loading1)
    return (
      <Dimmer active inverted>
        <Loader inverted content="Loading" />
      </Dimmer>
    );

  return (
    <Card.Group style={{ marginLeft: 120, marginTop: 30 }}>
      {" "}
      {data1.Circuit.map(item => (
        <Link key={item.circuitName} to={item.circuitId} state={{ item }}>
          <Card style={{ marginLeft: 20, marginTop: 20 }}>
            <img src={item.url} height={300} />
            <Card.Content>
              <Card.Header>{item.circuitName}</Card.Header>
              <Card.Meta>
                <span>{item.country}</span>
              </Card.Meta>
            </Card.Content>
          </Card>
        </Link>
      ))}
    </Card.Group>
  );
};

export default CircuitsPage;
