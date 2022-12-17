import { TYPES } from "../actions/cart.actions";

export const cartInitialState = {
  cart: [],
  total: 0,
};

export function cartReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      return { ...state, cart: [...state.cart, action.payload] };
    }
    case TYPES.REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((product) => product.cartID !== action.payload),
      };
    }
    case TYPES.UPDATE_AMOUNT: {
      return {
        ...state,
        total: state.total + action.payload,
      };
    }
    default:
      return state;
  }
}
