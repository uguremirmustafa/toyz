import { ACTIONS } from './Actions';

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.CLOSE_CART:
      return {
        ...state,
        isCartOpen: false,
      };
    case ACTIONS.OPEN_CART:
      return {
        ...state,
        isCartOpen: true,
      };

    default:
      return state;
  }
};

export default reducers;
