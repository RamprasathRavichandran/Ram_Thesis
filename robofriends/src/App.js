import React from "react";
import { robots } from "./robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { render } from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchFiled: "",
    };
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    this.setState({ searchFiled: event.target.value });
  };
  render() {
    const filterRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchFiled.toLowerCase());
    });
    return (
      <div className="tc">
        <h1> RoboFriends </h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filterRobots} />{" "}
      </div>
    );
  }
}

export default App;
