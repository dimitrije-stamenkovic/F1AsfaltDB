import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Card, Dimmer, Loader, Image, Segment } from "semantic-ui-react";

import { Link } from "@reach/router";

const GET_DRIVERS = gql`
  {
    Driver {
      driverId
      permanentNumber
      code
      url
      givenName
      familyName
      dateOfBirth
      nationality
      wins
      podiums
      salary
      drives: drives_for {
        Constructor {
          name
        }
      }
      positions: finished_race {
        Circuit {
          circuitName
        }
        position
      }
    }
  }
`;

const DriversPage = () => {
  const { loading: loading2, data: data2, refetch: refetch2 } = useQuery(
    GET_DRIVERS
  );

  if (loading2)
    return (
      <Dimmer active inverted>
        <Loader inverted content="Loading" />
      </Dimmer>
    );

  return (
    <Card.Group style={{ marginLeft: 120, marginTop: 30 }}>
      {" "}
      {data2.Driver.map(item => (
        <Link key={item.givenName} to={item.driverId} state={{ item }}>
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
    </Card.Group>
  );
};

export default DriversPage;
