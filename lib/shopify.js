import Client from 'shopify-buy';

const shopify = Client.buildClient({
  domain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
  storefrontAccessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
});

export default shopify;

export async function getAllProducts() {
  const data = await shopify.product.fetchAll();
  const products = JSON.parse(JSON.stringify(data));
  return products;
}

export async function createCheckout() {
  const data = await shopify.checkout.create();
  const checkout = JSON.parse(JSON.stringify(data));
  return checkout;
}

export async function getProductByHandle(handle) {
  const product = await shopify.product.fetchByHandle(handle);
  return product;
}

export async function addItemsToCheckout(checkoutId, lineItems) {
  const products = await shopify.checkout.addLineItems(checkoutId, lineItems);
  return products;
}
