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
import Search from "./components/Search";
import MojNavbar from "./components/MojNavbar";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <MojNavbar />

      <Router>
        <MainPage path="/" />
        <DriversPage path="/drivers" />
        <Driver path="/drivers/:driverId" />
        <ConstructorsPage path="/constructors" />
        <Constructor path="/constructors/:constructorId" />
        <CircuitsPage path="/circuits" />
        <Circuit path="/circuits/:circuitId" />
        <Search path="/search" />
      </Router>
    </div>
  );
};

export default App;
