import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { Avatar, List } from "antd";
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
    <List>
      {data.Driver.map(item => (
        <List.Item key={item.givenName}>
          <List.Item.Meta
            avatar={<Avatar src={item.url} />}
            description={
              item.givenName +
              " " +
              item.familyName +
              " " +
              item.permanentNumber
            }
          />
        </List.Item>
      ))}
    </List>
  );
};

export default TopList;
