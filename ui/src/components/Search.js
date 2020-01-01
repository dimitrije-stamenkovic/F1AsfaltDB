import React, { useState } from "react";
import { Link } from "@reach/router";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import {
  Grid,
  List,
  Item,
  Image,
  Dimmer,
  Loader,
  Input
} from "semantic-ui-react";

const GET_CIRCUITS = gql`
  query Circuit($search: String = "") {
    Circuit(
      filter: {
        OR: [{ circuitName_contains: $search }, { circuitId_contains: $search }]
      }
    ) {
      circuitId
      url
      circuitName
      country
      length
    }
  }
`;

const GET_DRIVERS = gql`
  query Driver($search: String = "") {
    Driver(
      filter: {
        OR: [
          { givenName_contains: $search }
          { familyName_contains: $search }
          { driverId_contains: $search }
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
      drives: drives_for {
        Constructor {
          name
        }
      }
      positions: finished_race {
        Circuit {
          circuitName
        }
        position
      }
    }
  }
`;
const GET_CONSTRUCTORS = gql`
  query Constructor($search: String = "") {
    Constructor(
      filter: {
        OR: [{ constructorId_contains: $search }, { name_contains: $search }]
      }
    ) {
      constructorId
      url
      name
      chassis
      nationality
    }
  }
`;

const Search = ({ term, hook }) => {
  const [search, setSearch] = useState("");

  const { loading: loading1, data: data1, refetch: refetch1 } = useQuery(
    GET_CIRCUITS
  );
  const { loading: loading2, data: data2, refetch: refetch2 } = useQuery(
    GET_DRIVERS
  );
  const { loading: loading3, data: data3, refetch: refetch3 } = useQuery(
    GET_CONSTRUCTORS
  );

  function handleChange({ target }) {
    setSearch(target.value);
    refetch1({ search });
    refetch2({ search });
    refetch3({ search });
  }

  return (
    <div className="Seach">
      <Input key={"some-key"} value={search} onChange={handleChange} />
      <div className="listing" style={{ marginTop: 50 }}>
        <Grid divided="horizontally">
          <Grid.Row columns={3}>
            <Grid.Column>
              {loading1 ? (
                <Dimmer active inverted>
                  <Loader inverted content="Loading" />
                </Dimmer>
              ) : (
                <List>
                  {data1.Circuit.map(item => (
                    <List.Item>
                      <Image avatar src={item.url} />
                      <List.Content>
                        <Link
                          key={item.name}
                          to={"/circuits/" + item.circuitId}
                          state={{ item }}
                        >
                          <List.Header as="a">{item.circuitName}</List.Header>
                        </Link>

                        <List.Description>
                          {item.circuitName + " " + item.country}
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  ))}
                </List>
              )}
            </Grid.Column>
            <Grid.Column>
              {loading2 ? (
                <Dimmer active inverted>
                  <Loader inverted content="Loading" />
                </Dimmer>
              ) : (
                <List>
                  {data2.Driver.map(item => (
                    <List.Item>
                      <Image avatar src={item.url} />

                      <List.Content>
                        <Link
                          key={item.name}
                          to={"/drivers/" + item.driverId}
                          state={{ item }}
                        >
                          <List.Header as="a" to="#">
                            {item.givenName}
                          </List.Header>
                        </Link>

                        <List.Description>
                          {item.givenName +
                            " " +
                            item.familyName +
                            " " +
                            item.permanentNumber}
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  ))}
                </List>
              )}
            </Grid.Column>
            <Grid.Column>
              {loading3 ? (
                <Dimmer active inverted>
                  <Loader inverted content="Loading" />
                </Dimmer>
              ) : (
                <List>
                  {data3.Constructor.map(item => (
                    <List.Item>
                      <Image avatar src={item.url} />
                      <List.Content>
                        <Link
                          key={item.name}
                          to={"/constructors/" + item.constructorId}
                          state={{ item }}
                        >
                          <List.Header as="a">{item.name}</List.Header>
                        </Link>

                        <List.Description>
                          {item.name + " " + item.nationality}
                        </List.Description>
                      </List.Content>
                    </List.Item>
                  ))}
                </List>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};

export default Search;

//odavde pozvati funkcije da nadje vozace , trke , ekipe i ubaciti rezultate u store
