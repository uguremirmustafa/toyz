import { GraphQLClient } from 'graphql-request';
export { gql } from 'graphql-request';

const endpoint = 'https://developugur.myshopify.com/api/2021-04/graphql.json';

const client = new GraphQLClient(endpoint, {
  headers: {
    'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  },
});

export default client;
