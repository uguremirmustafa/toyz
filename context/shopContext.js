import React, { createContext, useReducer } from 'react';
import reducers from './Reducers';

export const ShopContext = createContext();

export default function ShopProvider({ children }) {
  const initialState = { product: {}, products: [], checkout: {}, isCartOpen: false };

  const [state, dispatch] = useReducer(reducers, initialState);

  return <ShopContext.Provider value={{ state, dispatch }}>{children}</ShopContext.Provider>;
}
