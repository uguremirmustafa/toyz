import { ACTIONS } from './Actions';

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };

    default:
      return state;
  }
};

export default reducers;
