import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: 'developugur.myshopify.com',
  storefrontAccessToken: '197a8074ebb17eb745e13d523a1152c3',
});

export default client;
