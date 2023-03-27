import * as React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <>
      <Head>
        <title>Spyglass | Home </title>
        <meta name='keywords' content='Kubernetes'></meta>
      </Head>
      <div className={styles.container}></div>
    </>
  );
};

export default Home;
