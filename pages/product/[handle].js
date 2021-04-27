import React from 'react';
import { getAllProducts } from '../../lib/allProducts';

export default function SingleProduct() {
  return <div></div>;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
export async function getStaticPaths() {
  getAllProducts();
  return {
    paths: [
      { params: {} }, // See the "paths" section below
    ],
    fallback: true,
  };
}
