import React from 'react';
import { getAllProducts } from '../lib/allProducts';
import Link from 'next/link';
export default function index({ products }) {
  console.log(products);
  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <Link href={`/product/${item.handle}`}>
            <h2>{item.title}</h2>
          </Link>
          <img src={item.images[0].src} width={400} />
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const products = await getAllProducts();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
