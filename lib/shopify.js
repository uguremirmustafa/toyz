import Client from 'shopify-buy';

const shopify = Client.buildClient({
  domain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
  storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
});

export default shopify;

export async function getAllProducts() {
  const products = await shopify.product.fetchAll();
  return products;
}

export async function createCheckout() {
  const checkout = await shopify.checkout.create();
  return JSON.parse(JSON.stringify(checkout));
}

export async function getProductByHandle(handle) {
  const product = await shopify.product.fetchByHandle(handle);
  return product;
}

export async function addItemsToCheckout(checkoutId, lineItems) {
  const products = await shopify.checkout.addLineItems(checkoutId, lineItems);
  return products;
}
