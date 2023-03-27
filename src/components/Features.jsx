import * as React from 'react';
import Image from 'next/image';
import styles from '../styles/Features.module.css';

const Features = () => {
  return (
    <div className={styles.container}>
      <Image
        src='/demo-gifs/local-cluster-metrics.gif'
        alt='local-cluster-metrics-gif'
        width='800'
        height='400'
      />
      <Image
        src='/demo-gifs/cost-analysis.gif'
        alt='cost-analysis-gif'
        width='800'
        height='400'
      />
      <Image
        src='/demo-gifs/visualizer.gif'
        alt='cluster-visualizer-gif'
        width='800'
        height='400'
      />
    </div>
  );
};

export default Features;
