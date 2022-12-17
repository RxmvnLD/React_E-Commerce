import { createContext, useEffect, useReducer } from "react";
import { cartReducer, cartInitialState } from "../reducers/cart.reducer";
import React from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
export { CartProvider };
