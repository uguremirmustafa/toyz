import React, { createContext, useEffect, useReducer } from 'react';
import reducers from './Reducers';
import { createCheckout } from '@lib/shopify';

export const ShopContext = createContext();

export default function ShopProvider({ children }) {
  let initialState = { isCartOpen: false };

  const [state, dispatch] = useReducer(reducers, initialState);

  return <ShopContext.Provider value={{ state, dispatch }}>{children}</ShopContext.Provider>;
}
