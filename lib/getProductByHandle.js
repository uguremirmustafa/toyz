import shopify from './shopify';

export async function getProductByHandle(handle) {
  const product = await shopify.product.fetchByHandle(handle);
  return product;
}
