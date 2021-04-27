import Link from 'next/link';
import React from 'react';

export default function ProductPreviewCard({ product }) {
  console.log(product);
  return (
    <div className="productPreviewCard">
      <Link href={`/product/${product.handle}`}>
        <a>
          <h2 className="cardTitle">{product.title}</h2>
        </a>
      </Link>
      <img src={product.images[0].src} className="productImage" />
      <div className="flex">
        <button className="btn">&hearts;</button>
        <span className="priceTag">{product.variants[0].price}</span>
        <button className="btn">Add to cart</button>
      </div>
    </div>
  );
}
