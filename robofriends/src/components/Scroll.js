import React from "react";

const Scroll = (props) => {
  console.log(props.children);
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "1500 px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
