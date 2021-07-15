const eventsReducer = (state = { events: [], loading: false }, action) => {
  switch (action.type) {
    case "LOADING_EVENTS":
      return {
        ...state,
        events: [...state.events],
        loading: true
      };
    case "ADD_EVENTS":
      return {
        ...state,
        events: action.events,
        loading: false
      };
    default:
      return state;
  }
};

export default eventsReducer;
