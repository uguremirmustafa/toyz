import React from 'react';
import { getAllProducts } from '../../lib/allProducts';
import { getProductByHandle } from '../../lib/getProductByHandle';

export default function SingleProduct({ product }) {
  console.log(product);
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.images[0].src} width={400} />
      <p>{product.variants[0].price} TRY</p>
    </div>
  );
}

export async function getStaticProps({ params: { handle } }) {
  const product = await getProductByHandle(handle);
  const json = JSON.parse(JSON.stringify(product));
  return {
    props: { product: json },
  };
}
export async function getStaticPaths() {
  const products = await getAllProducts();
  const json = JSON.parse(JSON.stringify(products));
  return {
    paths: json.map((item) => {
      return { params: { handle: item.handle } };
    }),
    fallback: true,
  };
}
