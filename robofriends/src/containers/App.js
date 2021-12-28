import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundry";
import { render } from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchFiled: "",
    };
  }
  //Mount
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState({
          robots: users,
        })
      );
  }
  onSearchChange = (event) => {
    console.log(event.target.value);
    this.setState({
      searchFiled: event.target.value,
    });
  };
  render() {
    const { searchFiled, robots } = this.state;
    const filterRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchFiled.toLowerCase());
    });

    return (
      <div className="tc">
        <h1> RoboFriends </h1> <SearchBox searchChange={this.onSearchChange} />{" "}
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filterRobots} />{" "}
          </ErrorBoundary>{" "}
        </Scroll>{" "}
      </div>
    );
  }
}

export default App;
