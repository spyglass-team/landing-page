import * as React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Animation from '../components/Animation';

const Home = () => {
  return (
    <>
      <Head>
        <title>Spyglass | Home </title>
        <meta name='keywords' content='Kubernetes'></meta>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.h1}>
          <span>EMPOWER YOUR KUBERNETES NEEDS WITH SPYGLASS!</span>
          <br />
          <br />
          We are a one-stop shop for cluster health metrics, cluster
          visualization, and cost optimization.
        </h1>
        <Animation />
        <h1></h1>
      </div>
    </>
  );
};

export default Home;
