import Layout from 'components/Layout';
import ShopProvider from 'context/shopContext';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ShopProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShopProvider>
  );
}

export default MyApp;
