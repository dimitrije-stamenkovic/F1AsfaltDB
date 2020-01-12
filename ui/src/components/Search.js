import React, { useState } from "react";
import { Link } from "@reach/router";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Grid, List, Image, Dimmer, Loader, Input } from "semantic-ui-react";
import { Container, Row, Col, Table } from "reactstrap";

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
      drivers {
        Driver {
          givenName
          familyName
        }
      }
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
      <input
        key={"some-key"}
        value={search}
        onChange={handleChange}
        style={{ margin: "20px 0px" }}
        placeholder="Search ..."
      />
      <Row>
        <Col>
          <h1>Drivers</h1>{" "}
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
          <h1>Constructors</h1>
          {loading3 ? (
            <Dimmer active inverted>
              <Loader inverted content="Loading" />
            </Dimmer>
          ) : (
            <Table dark>
              <thead>
                <tr>
                  <th>Last Name</th>
                  <th>Number</th>
                </tr>
              </thead>
              <tbody>
                {data3.Constructor.map(item => (
                  <tr key={item.name}>
                    <td>
                      <Link
                        to={"/constructors/" + item.constructorId}
                        state={{ item }}
                      >
                        {item.name}
                      </Link>
                    </td>

                    <td>{item.nationality}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
        <Col>
          <h1>Circuits</h1>{" "}
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
                      <Link to={"/circuits/" + item.circuitId} state={{ item }}>
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
    </div>
  );
};

export default Search;

//odavde pozvati funkcije da nadje vozace , trke , ekipe i ubaciti rezultate u store
