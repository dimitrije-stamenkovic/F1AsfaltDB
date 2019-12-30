import React, { useState } from "react";

// import Search from "./components/Search";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Container } from "semantic-ui-react";
import { Router } from "@reach/router";

import MainPage from "./pages/MainPage";
import CircuitsPage from "./pages/CircuitsPage";
import Circuit from "./components/Circuit";
import ConstructorsPage from "./pages/ConstructorsPage";
import Constructor from "./components/Constructor";
import DriversPage from "./pages/DriversPage";
import Driver from "./components/Driver";

import MojNavbar from "./components/MojNavbar";

import "./App.css";

const GET_CIRCUITS = gql`
  query Circuit($search: String = "") {
    Circuit(
      filter: {
        OR: [{ circuitName_contains: $search }, { circuitId_contains: $search }]
      }
    ) {
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
      givenName
      familyName
      permanentNumber
      url
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
      name
      nationality
    }
  }
`;
// import { StoreContainer } from "./store";

const App = () => {
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
    <div className="App">
      {/* <input key={"some-key"} value={search} onChange={handleChange} />
      {loading1 ? "loading" : console.log(data1)}
      {loading2 ? "loading" : <Drivers drivers={data2.Driver} />}
      {loading3 ? "loading" : console.log(data3)} */}
      <MojNavbar />

      <Router>
        <MainPage path="/" />
        <DriversPage path="/drivers" />
        <Driver path="/drivers/:driverId" />
        <ConstructorsPage path="/constructors" />
        <Constructor path="/constructors/:constructorId" />
        <CircuitsPage path="/circuits" />
        <Circuit path="/circuits/:circuitId" />
      </Router>
    </div>
  );
};

export default App;
