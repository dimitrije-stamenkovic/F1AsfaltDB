import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Card } from "semantic-ui-react";
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
    }
  }
`;

const SimiliarConstructors = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  const { loading, error, data } = useQuery(GET_DRIVERS, {
    variables: {
      wins: driver.wins,
      podiums: driver.podiums,
      nationality: driver.nationality,
      name: driver.name
    }
  });

  if (loading) return null;
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
