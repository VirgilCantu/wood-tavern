import React, { Component } from "react";
import Events from "../components/events/Events";
import { fetchEvents } from "../actions/eventActions";
import { connect } from "react-redux";

class EventsContainer extends Component {
  render() {
    return <div></div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);
