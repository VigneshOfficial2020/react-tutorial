import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  numOfCakes: 10,
};

const cakeReducer = (action, state = initialState) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case "RESET":
      return {
        ...state,
        numOfCakes: initialState,
      };
    default:
      return state;
  }
};

export default cakeReducer;
