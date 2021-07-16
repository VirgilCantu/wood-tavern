import React from "react";

const Event = props => {
  return (
    <div>
      <h1>{props.event.name}</h1>
      <h3>
        {props.event.date} - {props.event.time}
      </h3>
      <p>{props.event.description}</p>
    </div>
  );
};

export default Event;
