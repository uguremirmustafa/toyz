import { createCheckout } from '@lib/shopify';
import { ShopContext } from 'context/shopContext';
import Link from 'next/link';
import React, { useContext } from 'react';

export default function ProductPreviewCard({ product }) {
  const { state, dispatch } = useContext(ShopContext);
  console.log(state.isCartOpen);

  const addToCart = async () => {
    let checkoutId = window.localStorage.getItem('checkoutId');
    if (!checkoutId) {
      const checkout = createCheckout();
      checkoutId = window.localStorage.setItem('checkoutId', checkout.id);
    }
  };

  return (
    <div className="productPreviewCard">
      <Link href={`/product/${product.handle}`}>
        <a>
          <h2 className="cardTitle">{product.title}</h2>
        </a>
      </Link>
      <img src={product.images[0].src} className="productImage" />
      <div className="flex">
        <button className="btn" onClick={() => dispatch({ type: 'TOGGLE_CART' })}>
          &hearts;
        </button>
        <span className="priceTag">{product.variants[0].price}</span>
        <button className="btn" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
