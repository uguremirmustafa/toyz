import React from 'react';
import { getAllProducts } from '@lib/allProducts';
import Link from 'next/link';
import Image from 'next/image';
export default function index({ products }) {
  console.log(products);
  return (
    <div className="home">
      {products.map((item) => (
        <div key={item.id}>
          <Link href={`/product/${item.handle}`}>
            <a>
              <h2>{item.title}</h2>
            </a>
          </Link>
          <Image
            src={item.images[0].src}
            width={600}
            height={400}
            objectFit="cover"
            className="productImage"
          />
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
