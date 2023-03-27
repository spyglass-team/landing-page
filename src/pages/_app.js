import Layout from '@/components/Layout';
import '../styles/app.css';

const app = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default app;
