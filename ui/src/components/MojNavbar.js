import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "@reach/router";

export default class MojNavbar extends Component {
  render() {
    return (
      <Menu>
        <Link to="/">
          <Menu.Item
          // name="main"
          // active={activeItem === "main"}
          // onClick={this.handleItemClick}
          >
            Main
          </Menu.Item>
        </Link>
        <Link to="/drivers">
          <Menu.Item
          // name="drivers"
          // active={activeItem === "drivers"}
          // onClick={this.handleItemClick}
          >
            Drivers
          </Menu.Item>
        </Link>
        <Link to="/constructors">
          <Menu.Item
          // name="constructors"
          // active={activeItem === "constructors"}
          // onClick={this.handleItemClick}
          >
            Construcotrs
          </Menu.Item>
        </Link>
        <Link to="/circuits">
          <Menu.Item
          // name="circuits"
          // active={activeItem === "circuits"}
          // onClick={this.handleItemClick}
          >
            Circuits
          </Menu.Item>
        </Link>
      </Menu>
    );
  }
}
