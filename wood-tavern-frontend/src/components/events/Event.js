import React from "react";

const Event = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>
        {props.date} - {props.time}
      </h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Event;
