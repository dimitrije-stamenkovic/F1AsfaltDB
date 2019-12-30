import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import "./Driver.css";

const Driver = ({ location }) => {
  const { state } = location;
  const { item } = state;
  return (
    <Container>
      {console.log(item)}
      <Grid>
        <Grid.Column width={6}>
          <Image src={item.url} size="big" />
        </Grid.Column>
        <Grid.Column width={10}>
          <div className="driver-info">
            <p>Name : {item.givenName}</p>
            <p>Last name : {item.familyName}</p>
            <p>Number : {item.permanentNumber}</p>
            <p>Code : {item.code}</p>
            <p>Birthday : {item.dateOfBirth}</p>
            <p>Nationality : {item.nationality}</p>
            <p>Wins : {item.wins}</p>
            <p>Podiums : {item.podiums}</p>
            <p>Salary : {item.salary} </p>
          </div>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Driver;
