import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import "./Driver.css";
import SimiliarDrivers from "./SimiliarComponents/SimiliarDrivers";

const Driver = ({ location }) => {
  const { state } = location;
  const { item } = state;
  return (
    <Container className="driver">
      {console.log(item)}
      <Grid divided="vertically">
        <Grid.Row columns={2}>
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
              <p>Drives for : {item.drives[0].Constructor.name}</p>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <SimiliarDrivers
              driver={{
                wins: item.wins,
                podiums: item.podiums,
                nationality: item.nationality,
                name: item.givenName
              }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Driver;
