import React from "react";

const SearchBox = ({onSearchChange}) => {
  return (
    <div className="pa2">
      <input className="pa3 ba b--green bg--lightest-blue" onChange={onSearchChange} type="search" placeholder="searchrobots" />
    </div>
  );
}

export default SearchBox;
