import React from "react";
import { robots } from "./robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { render } from "react-dom";

const state ={
    
}
class App extends React.Component{
    constructor(){
        super();
        this.state={
            robots: robots,
            searchField: ''
        }
    }
    onSearchChange = (event) => {
        this.setState({searchField:event.target.value});
        console.log(event.target.value);
        const filter = this.state.robots.filter(robot=>{
            return robot.name.toLocaleLowerCase().includes(this.searchField.toLocaleLowerCase());
        });
    }
    render(){
        return (
            <div className="tc">
              <h1>RoboFriends</h1>
              <SearchBox onSearchChange={this.onSearchChange}/>
               <CardList robots={this.state.robots} />
            </div>
          );
    }
}

 
export default App;
