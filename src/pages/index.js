import * as React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Animation from '../components/Animation';
import Features from '../components/Features';

const Home = () => {
  return (
    <>
      <Head>
        <title>Spyglass | Home </title>
        <meta name="keywords" content="Kubernetes"></meta>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.h1}>
          <span>KUBERNETES JUST GOT A WHOLE LOT CLEARER WITH SPYGLASS!</span>
          <br />
          <br />
          We are a one-stop shop for cluster health metrics, cluster
          visualization, and cost optimization.
        </h1>
        <div className={styles.logo}>
          <Animation />
        </div>
      </div>
      <Features />
    </>
  );
};

export default Home;
