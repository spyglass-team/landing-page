import Layout from '@/components/layout';
import '../styles/app.css';

const app = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default app;
