import { addItemsToCheckout } from '@lib/shopify';
import { ShopContext } from 'context/shopContext';
import Link from 'next/link';
import React, { useContext } from 'react';

export default function ProductPreviewCard({ product }) {
  const { state, dispatch } = useContext(ShopContext);

  const handleCart = async () => {
    const itemsToAdd = [
      {
        variantId: product.variants[0].id,
        quantity: 1,
      },
    ];
    addItemsToCheckout(state.checkout?.id, itemsToAdd);
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
        <button className="btn" onClick={() => dispatch({ type: 'OPEN_CART' })}>
          &hearts;
        </button>
        <span className="priceTag">{product.variants[0].price}</span>
        <button className="btn" onClick={handleCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
