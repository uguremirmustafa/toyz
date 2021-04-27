import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
  storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
});

export default client;

export async function getAllProducts() {
  const products = await shopify.product.fetchAll();
  return products;
}

export async function createCheckout() {
  const checkout = await shopify.checkout.create();
  console.log(checkout);
  return checkout;
}

export async function getProductByHandle(handle) {
  const product = await shopify.product.fetchByHandle(handle);
  return product;
}

export async function addToCart(checkoutId, lineItems) {
  const products = await shopify.checkout.addLineItems(checkoutId, lineItems);
  return products;
}
