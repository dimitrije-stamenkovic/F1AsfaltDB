import React from "react";
import { Input } from "antd";

const Search = ({ term, hook }) => {
  return (
    <div className="Search input">
      <Input
        placeholder="Basic usage"
        type="text"
        value={term}
        onChange={ev => hook(ev.target.value)}
      />
    </div>
  );
};

export default Search;

//odavde pozvati funkcije da nadje vozace , trke , ekipe i ubaciti rezultate u store
