import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "@reach/router";
import { Nav, NavItem, NavLink } from "reactstrap";

export default class MojNavbar extends Component {
  render() {
    return (
      <Nav tabs={true} pills={true} card={true} horizontal={"center"}>
        <NavItem>
          <NavLink href="/">
            <h2>Home</h2>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/drivers">
            <h2>Drivers</h2>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/constructors">
            <h2>Constructors</h2>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/circuits">
            <h2>Circuits</h2>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/search">
            <h2>Search</h2>
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
}
