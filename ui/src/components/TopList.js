import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import React from "react";

const GET_DRIVER = gql`
  {
    Driver {
      givenName
      familyName
      permanentNumber
      url
    }
  }
`;

const TopList = () => {
  const { loading, error, data } = useQuery(GET_DRIVER);

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>
      {data.Driver.map(item => (
        <div key={item.givenName}>
          <p>{item.givenName}</p>
          <p>{item.familyName}</p>
          <p>{item.permanentNumber}</p>
          {/* <img src={item.url}></img> */}
        </div>
      ))}
    </div>
  );
};

export default TopList;
