import Layout from 'components/Layout';
import ShopProvider from 'context/shopContext';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ShopProvider>
        <Component {...pageProps} />
      </ShopProvider>
    </Layout>
  );
}

export default MyApp;
