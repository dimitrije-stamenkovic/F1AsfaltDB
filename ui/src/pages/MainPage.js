import React from "react";
import { Link } from "@reach/router";
import { Grid, List, Image, Dimmer, Loader } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";
import orderBy from "lodash.orderby";
import { GET_CIRCUITS, GET_CONSTRUCTORS, GET_DRIVERS } from "./QueriesForMain";
import { Container, Row, Col, Table } from "reactstrap";

const MainPage = () => {
  const { loading: loading1, data: data1 } = useQuery(GET_CIRCUITS);
  const { loading: loading2, data: data2 } = useQuery(GET_DRIVERS);
  const { loading: loading3, data: data3 } = useQuery(GET_CONSTRUCTORS);

  if (loading1) return null;
  if (loading2) return null;
  if (loading3) return null;
  return (
    <div className="Main">
      <Container style={{ marginTop: "150px" }}>
        <Row>
          <Col>
            <h1>Most Wins</h1>{" "}
            {loading2 ? (
              <Dimmer active inverted>
                <Loader inverted content="Loading" />
              </Dimmer>
            ) : (
              <Table dark>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Number</th>
                  </tr>
                </thead>
                <tbody>
                  {data2.Driver.map(item => (
                    <tr key={item.givenName}>
                      <td>
                        <Link
                          key={item.name}
                          to={"/drivers/" + item.driverId}
                          state={{ item }}
                        >
                          {item.givenName}
                        </Link>
                      </td>
                      <td>{item.familyName}</td>
                      <td>{item.wins}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Col>
          <Col>
            <h1>Most Points</h1>
            {loading3 ? (
              <Dimmer active inverted>
                <Loader inverted content="Loading" />
              </Dimmer>
            ) : (
              <Table dark>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Number</th>
                    <th>Points</th>
                  </tr>
                </thead>
                <tbody>
                  {orderBy(
                    data3.Constructor,
                    ["participated[0].points", "age"],
                    ["desc", "asc"]
                  ).map(item => (
                    <tr key={item.name}>
                      <td>
                        <Link
                          to={"/constructors/" + item.constructorId}
                          state={{ item }}
                        >
                          {item.name}
                        </Link>
                      </td>
                      <td>{item.name}</td>
                      <td>{item.nationality}</td>
                      <td>{item.participated[0].points}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Col>
          <Col>
            <h1>Longest circuits</h1>{" "}
            {loading1 ? (
              <Dimmer active inverted>
                <Loader inverted content="Loading" />
              </Dimmer>
            ) : (
              <Table dark>
                <thead>
                  <tr>
                    <th>Full name</th>
                    <th>Name</th>
                    <th>Country</th>
                  </tr>
                </thead>
                <tbody>
                  {data1.Circuit.map(item => (
                    <tr key={item.circuitName}>
                      <td>
                        <Link
                          to={"/circuits/" + item.circuitId}
                          state={{ item }}
                        >
                          {item.circuitName}
                        </Link>
                      </td>
                      <td>{item.country}</td>
                      <td>{item.length} km</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainPage;
