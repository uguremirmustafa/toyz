import React, { createContext, useEffect, useReducer, useState } from 'react';
import reducers from './Reducers';
import client, { gql } from '@lib/client';
import useSWR from 'swr';
import { getCookie, setCookie } from '@lib/cookie';
const CreateCheckout = gql`
  mutation {
    checkoutCreate(input: { lineItems: [] }) {
      checkout {
        id
      }
    }
  }
`;

export const ShopContext = createContext();

export default function ShopProvider({ children }) {
  // const { data } = useSWR(CreateCheckout, (query) => client.request(query), {
  //   revalidateOnMount: true,
  // });
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  const cart = getCookie('cart');

  let initialState = { isCartOpen: false, cart };

  const [state, dispatch] = useReducer(reducers, initialState);

  useEffect(() => {
    setCookie('cart', state.cart);
  }, [state]);

  return <ShopContext.Provider value={{ state, dispatch }}>{children}</ShopContext.Provider>;
}
