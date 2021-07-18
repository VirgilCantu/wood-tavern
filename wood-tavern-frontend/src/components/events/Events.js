import React, { Component } from "react";
import Event from "./Event";

class Events extends Component {
  renderEvents = () =>
    this.props.events.map(event => <Event key={event.id} event={event} />);

  render() {
    return <div className="text-center">{this.renderEvents()}</div>;
  }
}

export default Events;
