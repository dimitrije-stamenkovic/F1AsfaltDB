import React from "react";
import { Link } from "@reach/router";
import { Grid, List, Image, Dimmer, Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";
import orderBy from "lodash.orderby";
import { GET_CIRCUITS, GET_CONSTRUCTORS, GET_DRIVERS } from "./QueriesForMain";

const MainPage = () => {
  const { loading: loading1, data: data1 } = useQuery(GET_CIRCUITS);
  const { loading: loading2, data: data2 } = useQuery(GET_DRIVERS);
  const { loading: loading3, data: data3 } = useQuery(GET_CONSTRUCTORS);

  if (loading1) return null;
  if (loading2) return null;
  if (loading3) return null;
  return (
    <div className="Main">
      {" "}
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column>
            {" "}
            {loading2 ? (
              <Dimmer active inverted>
                <Loader inverted content="Loading" />
              </Dimmer>
            ) : (
              <List>
                {data2.Driver.map(item => (
                  <List.Item key={item.givenName}>
                    <Image avatar src={item.url} />

                    <List.Content>
                      <Link
                        key={item.name}
                        to={"/drivers/" + item.driverId}
                        state={{ item }}
                      >
                        {item.givenName}
                      </Link>

                      <List.Description>
                        {item.givenName +
                          " " +
                          item.familyName +
                          " " +
                          item.wins}
                      </List.Description>
                    </List.Content>
                  </List.Item>
                ))}
              </List>
            )}
          </Grid.Column>
          <Grid.Column>
            Most Points
            {loading3 ? (
              <Dimmer active inverted>
                <Loader inverted content="Loading" />
              </Dimmer>
            ) : (
              <List>
                {orderBy(
                  data3.Constructor,
                  ["participated[0].points", "age"],
                  ["desc", "asc"]
                ).map(item => (
                  <List.Item key={item.name}>
                    <Image avatar src={item.url} />
                    <List.Content>
                      <Link
                        key={item.name}
                        to={"/constructors/" + item.constructorId}
                        state={{ item }}
                      >
                        {item.name}
                      </Link>

                      <List.Description>
                        {item.name +
                          " " +
                          item.nationality +
                          " " +
                          item.participated[0].points}
                      </List.Description>
                    </List.Content>
                  </List.Item>
                ))}
              </List>
            )}
          </Grid.Column>
          <Grid.Column>
            {" "}
            {loading1 ? (
              <Dimmer active inverted>
                <Loader inverted content="Loading" />
              </Dimmer>
            ) : (
              <List>
                {data1.Circuit.map(item => (
                  <List.Item key={item.circuitName}>
                    <Image avatar src={item.url} />
                    <List.Content>
                      <Link
                        key={item.name}
                        to={"/circuits/" + item.circuitId}
                        state={{ item }}
                      >
                        {item.circuitName}
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
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default MainPage;
