import React from "react";

const Card = (props) => {
  const { name, id, email } = props;
  return (
    <div className="bg-light-green dib br3 pa3 ma2  grow bw2 shadow">
      <h1> {name} </h1>
      <img src={"https://robohash.org/" + name + "?200*200"} alt="robots" />
      <div>
        <h2>{name} </h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
