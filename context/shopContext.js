import React, { createContext, useEffect, useReducer } from 'react';
import reducers from './Reducers';
import useLocalStorageState from 'use-local-storage-state';
import { createCheckout } from '@lib/shopify';

export const ShopContext = createContext();

export default function ShopProvider({ children }) {
  const [checkout, setCheckout] = useLocalStorageState('shopify-checkout');

  useEffect(() => {
    if (!checkout) {
      const getData = async () => {
        const data = await createCheckout();
        setCheckout(data);
      };
      getData();
    }
  }, [createCheckout]);

  let initialState = { product: {}, products: [], isCartOpen: false, checkout };

  const [state, dispatch] = useReducer(reducers, initialState);

  return <ShopContext.Provider value={{ state, dispatch }}>{children}</ShopContext.Provider>;
}
