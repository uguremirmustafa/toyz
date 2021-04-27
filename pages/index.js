import React from 'react';
import { getAllProducts } from '@lib/shopify';
import ProductPreviewCard from 'components/ProductPreviewCard';
export default function index({ products }) {
  return (
    <div className="home">
      {products.map((item) => (
        <ProductPreviewCard key={item.id} product={item} />
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
