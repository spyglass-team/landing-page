import { NextUIProvider } from '@nextui-org/react';
import '../styles/app.css';

const app = ({ Component, pageProps }) => {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
};

export default app;
