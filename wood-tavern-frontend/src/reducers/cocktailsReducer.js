const cocktailsReducer = (
  state = { cocktails: [], loading: false },
  action
) => {
  switch (action.type) {
    case "LOADING_COCKTAILS":
      return {
        ...state,
        cocktails: [...state.cocktails],
        loading: true
      };
    case "ADD_COCKTAILS":
      return {
        ...state,
        cocktails: action.cocktails,
        loading: false
      };
    default:
      return state;
  }
};

export default cocktailsReducer;
