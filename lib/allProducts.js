import shopify from './shopify';

export async function getAllProducts() {
  const products = await shopify.product.fetchAll();
  return products;
}
