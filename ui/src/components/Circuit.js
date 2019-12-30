import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import "./Circuit.css";

const Circuit = ({ location }) => {
  const { state } = location;
  const { item } = state;
  return (
    <Container className="circuit">
      {console.log(item)}
      <Grid>
        <Grid.Column width={6}>
          <Image src={item.url} size="big" />
        </Grid.Column>
        <Grid.Column width={10}>
          <div className="circuit-info">
            <p>Name : {item.circuitName}</p>
            <p>Contry : {item.country}</p>
            <p>Length : {item.length}</p>
          </div>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Circuit;
