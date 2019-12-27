import React from "react";
import { StoreContainer } from "../store";

const Search = () => {
  const search = StoreContainer.useContainer();

  return (
    <div className="test">
      <input type="text" value={search.input} onChange={search.handleInput} />
    </div>
  );
};

export default Search;

//odavde pozvati funkcije da nadje vozace , trke , ekipe i ubaciti rezultate u store
