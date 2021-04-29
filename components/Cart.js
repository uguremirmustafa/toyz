import React, { useContext } from 'react';
import { ShopContext } from 'context/shopContext';

export default function Cart() {
  const { state, dispatch } = useContext(ShopContext);
  const items = state?.checkout.lineItems;
  console.log(items);
  return (
    <div className="cart">
      <h3>Your Cart</h3>
      {items?.map((item) => {
        console.log(item);
        return <div>{item.id}</div>;
      })}
    </div>
  );
}
