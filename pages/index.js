import React from 'react';
import { getAllProducts } from '@lib/shopify';
import ProductPreviewCard from 'components/ProductPreviewCard';
import useSWR from 'swr';
export default function index({ initialProducts }) {
  const { data: products } = useSWR('allProducts', getAllProducts(), {
    initialData: initialProducts,
    revalidateOnFocus: true,
  });

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
      initialProducts: products,
    },
  };
}
