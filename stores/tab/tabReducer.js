import * as tabActionsType from "./tabAction";
const initialState = {
  isTradeModelVisible: false,
};

const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case tabActionsType.SET_TRADE_MODEL_VISIBILITY:
      return {
        ...state,
        isTradeModelVisible: action.payload.isVisible,
      };

    default:
      return state;
  }
};
export default tabReducer;
