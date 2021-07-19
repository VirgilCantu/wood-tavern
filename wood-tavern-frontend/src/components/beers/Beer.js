import React from "react";
import Card from "react-bootstrap/Card";

const Beer = props => {
  return (
    <Card style={{ width: "36rem" }}>
      <Card.Body>
        <Card.Title>{props.beer.name}</Card.Title>
        <Card.Text>
          <p>
            <b>{props.beer.format}</b>
          </p>
          <p>
            <em>{props.beer.style}</em>
          </p>
          <p>ABV: {props.beer.abv}</p>
          {props.beer.brewery} - {props.beer.location}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Beer;
