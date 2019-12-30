import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import "./Constructor.css";

const Constructor = ({ location }) => {
  const { state } = location;
  const { item } = state;
  return (
    <Container className="constructor">
      {console.log(item)}
      <Grid>
        <Grid.Column width={6}>
          <Image src={item.url} size="big" />
        </Grid.Column>
        <Grid.Column width={10}>
          <div className="constructor-info">
            <p>Name : {item.name}</p>
            <p>Chassis: {item.chassis}</p>
            <p>Nationality : {item.nationality}</p>
          </div>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Constructor;
