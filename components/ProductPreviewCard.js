import { ShopContext } from 'context/shopContext';
import Link from 'next/link';
import React, { useContext } from 'react';

export default function ProductPreviewCard({ product }) {
  const {
    state: { cart, checkout },
    dispatch,
  } = useContext(ShopContext);

  const cartItem = {
    title: product.title,
    image: product.images[0].src,
    price: product.variants[0].price,
    id: product.variants[0].id,
    quantity: 1,
  };

  const handleCart = (id) => {
    const isInCartAlready = cart.filter((item) => item.id === id).length > 0;
    if (isInCartAlready) {
      alert('this item is already in the cart');
    } else {
      dispatch({ type: 'ADD_ITEM_TO_CART', payload: cartItem });
      dispatch({ type: 'OPEN_CART' });
    }
  };
  checkout && console.log(checkout);
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
        <button className="btn" onClick={() => handleCart(product.variants[0].id)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
