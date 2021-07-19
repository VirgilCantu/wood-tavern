import React from "react";
import Card from "react-bootstrap/Card";
const Event = props => {
  return (
    <Card style={{ width: "60rem", margin: "auto" }}>
      <Card.Header>Wood Tavern Weekly Events</Card.Header>
      <Card.Body>
        <Card.Title>
          <h3>{props.event.name}</h3>
        </Card.Title>
        {props.event.date} - {props.event.time}
        <br />
        <br />
        <Card.Text>
          <p style={{ width: "40rem", margin: "auto" }}>
            {props.event.description}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Event;
