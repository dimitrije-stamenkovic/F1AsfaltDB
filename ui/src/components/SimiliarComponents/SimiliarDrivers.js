import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Card, Dimmer, Loader } from "semantic-ui-react";
import { Link } from "@reach/router";

const GET_DRIVERS = gql`
  query Driver($wins: Int, $podiums: Int, $nationality: String, $name: String) {
    Driver(
      filter: {
        AND: [
          {
            OR: [
              { wins_gt: $wins }
              { podiums_gt: $podiums }
              { nationality: $nationality }
            ]
          }
          { givenName_not: $name }
        ]
      }
    ) {
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

const SimiliarDrivers = ({ driver }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  const { loading, error, data } = useQuery(GET_DRIVERS, {
    variables: {
      wins: driver.wins - 10,
      podiums: driver.podiums - 10,
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
              <img src={item.url} height={300} alt={item.givenName} />
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

export default SimiliarDrivers;
