const beersReducer = (state = { beers: [], loading: false }, action) => {
  switch (action.type) {
    case "LOADING_BEERS":
      return {
        ...state,
        beers: [...state.beers],
        loading: true
      };
    case "ADD_BEERS":
      return {
        ...state,
        beers: action.beers,
        loading: false
      };
    default:
      return state;
  }
};

export default beersReducer;
