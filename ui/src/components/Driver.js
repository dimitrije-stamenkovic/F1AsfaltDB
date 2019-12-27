import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { StoreContainer } from "../store";

const GET_DRIVER = gql`
  query Driver($name: String!) {
    Driver(filter: { givenName: $name }) {
      givenName
      familyName
      permanentNumber
      url
      code
      dateOfBirth
      nationality
      salary
    }
  }
`;

const Driver = () => {
  const search = StoreContainer.useContainer();

  const { loading, error, data } = useQuery(GET_DRIVER, {
    variables: { name: search.input }
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div className="driver-info">
      {console.log("TEST")}
      {data.Driver.length === 0 ? null : (
        <div>
          {" "}
          <p>First name : {data.Driver[0].givenName}</p>
          <p>Last name : {data.Driver[0].familyName}</p>
          <p>Number : {data.Driver[0].permanentNumber}</p>
          <img src={data.Driver[0].url} alt="profile"></img>
        </div>
      )}
    </div>
  );
};

export default Driver;
