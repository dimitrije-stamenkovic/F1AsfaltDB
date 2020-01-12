import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import "./Constructor.css";
import SimiliarConstructors from "./SimiliarComponents/SimiliarConstructors";

const Constructor = ({ location }) => {
  const { state } = location;
  const { item } = state;
  return (
    <Container className="constructor">
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column width={6}>
            <Image src={item.url} size="big" />
          </Grid.Column>
          <Grid.Column width={10}>
            <div className="constructor-info">
              <p>Name : {item.name}</p>
              <p>Chassis: {item.chassis}</p>
              <p>Nationality : {item.nationality}</p>
              <p>Drivers:</p>
              <p>
                {item.drivers[0].Driver.givenName}{" "}
                {item.drivers[0].Driver.familyName}
              </p>
              <p>
                {item.drivers[1].Driver.givenName}{" "}
                {item.drivers[1].Driver.familyName}
              </p>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <SimiliarConstructors
            constructor={{
              nationality: item.nationality,
              name: item.name
            }}
          />
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Constructor;
