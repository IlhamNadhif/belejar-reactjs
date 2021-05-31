import ActionType from './globalActionType'

const globalState = {
  totalOrder: 5,
};

// Reducer
const rootReducer = (state = globalState, action) => {
  switch (action.type) {
    case ActionType.PLUS_ORDER:
      return {
        ...state,
        totalOrder: state.totalOrder + 1,
      };
      break;
    case ActionType.MINUS_ORDER:
      return {
        ...state,
        totalOrder: state.totalOrder > 0 ? state.totalOrder - 1 : 0,
      };
      break;
    default:
      return state;
  }
};

export default rootReducer;
