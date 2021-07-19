import React from "react";
import Card from "react-bootstrap/Card";

const Cocktail = props => {
  return (
    <Card style={{ width: "30rem", margin: "auto" }} bg="success" text="light">
      <Card.Body>
        <Card.Title>{props.cocktail.name}</Card.Title>
        <Card.Text>
          <p>
            <em>{props.cocktail.description}</em>
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cocktail;
