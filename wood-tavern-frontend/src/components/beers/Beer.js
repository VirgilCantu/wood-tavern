import React from "react";

const Beer = props => {
  return (
    <div className="text-center">
      <h2>{props.beer.name}</h2>
      <h3>
        <b>{props.beer.format}</b>
      </h3>
      <h4>
        <em>{props.beer.style}</em>
      </h4>
      <p>ABV: {props.beer.abv}</p>
      <p>
        {props.beer.brewery} - {props.beer.location}
      </p>
    </div>
  );
};

export default Beer;
