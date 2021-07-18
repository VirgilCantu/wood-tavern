import React from "react";

const Cocktail = props => {
  return (
    <div className="text-center">
      <h2>{props.cocktail.name}</h2>
      <p>
        <em>{props.cocktail.description}</em>
      </p>
    </div>
  );
};

export default Cocktail;
