import React, { Component } from "react";
import Events from "../components/events/Events";
import { fetchEvents } from "../actions/eventActions";
import { connect } from "react-redux";

class EventsContainer extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return (
      <div>
        <Events events={this.props.events} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.eventsReducer.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => dispatch(fetchEvents())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);
