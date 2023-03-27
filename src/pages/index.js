import * as React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Animation from '../components/Animation';
import Image from 'next/image';

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
          We are a one-stop shop for cluster health metrics, cluster
          visualization, and cost optimization.
        </h1>
        <Animation />
        <Image
          src='/demo-gifs/cluster-visualizer.gif'
          alt='cluster-visualizer-gif'
          width='400'
          height='400'
        />
        <Image
          src='/demo-gifs/local-cluster-metrics.gif'
          alt='local-cluster-metrics-gif'
          width='400'
          height='400'
        />
        <Image
          src='/demo-gifs/cost-analysis.gif'
          alt='cost-analysis-gif'
          width='400'
          height='400'
        />
      </div>
    </>
  );
};

export default Home;
