import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { StoreContainer } from "../store";

const GET_CIRCUIT = gql`
  query Circuit($name: String!) {
    Circuit(filter: { circuitId: $name }) {
      url
      circuitName
      country
      length
    }
  }
`;

const Circuit = () => {
  const search = StoreContainer.useContainer();

  const { loading, error, data } = useQuery(GET_CIRCUIT, {
    variables: { name: search.input }
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div className="circuit-info">
      {data.Circuit.length === 0 ? null : (
        <div>
          {" "}
          <p>First name : {data.Circuit[0].circuitName}</p>
          <p>Last name : {data.Circuit[0].country}</p>
          <p>Number : {data.Circuit[0].length}</p>
          <img src={data.Circuit[0].url} alt="profile"></img>
        </div>
      )}
    </div>
  );
};

export default Circuit;
