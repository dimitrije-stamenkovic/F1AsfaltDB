import React from "react";
import Driver from "./components/Driver";
import Search from "./components/Search";
import Circuit from "./components/Circuit";
import TopList from "./components/TopList";
//import UserList from "./UserList";

import { StoreContainer } from "./store";

const App = () => {
  return (
    <div className="App">
      <StoreContainer.Provider>
        <Search />
        <TopList />
        <Driver />
        <Circuit />
      </StoreContainer.Provider>
    </div>
  );
};

export default App;

// <header className="App-header">
// <img
//   src={process.env.PUBLIC_URL + "/img/grandstack.png"}
//   className="App-logo"
//   alt="logo"
// />
// <h1 className="App-title">Welcome to GRANDstack</h1>
// </header>

// <UserList />
