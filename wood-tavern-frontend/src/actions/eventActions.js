export const fetchEvents = () => {
  return dispatch => {
    dispatch({ type: "LOADING_EVENTS" });
    fetch("http://localhost:3000/events")
      .then(response => response.json())
      .then(responseJSON =>
        dispatch({ type: "ADD_EVENTS", events: responseJSON })
      );
  };
};
