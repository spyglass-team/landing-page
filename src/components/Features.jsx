import * as React from 'react';
import Image from 'next/image';
import styles from '../styles/Features.module.css';

const Features = () => {
  return (
    <div className={styles.container}>
      {/* local cluster metrics */}
      <div className={styles.imageContainer}>
        <h1 className={styles.h1}>
          Monitor local cluster health metrics in real-time using{' '}
          <span>Grafana and Prometheus.</span>
        </h1>
        <h2 className={styles.h2}></h2>
        <Image
          className={styles.gif}
          src="/demo-gifs/local-cluster-metrics.gif"
          alt="local-cluster-metrics-gif"
          width="700"
          height="350"
        />
      </div>
      {/* cloud cluster metrics */}
      <div className={styles.imageContainer}>
        <h1 className={styles.h1}>
          Monitor cloud-based cluster health metrics in real-time using{' '}
          <span>Grafana and Prometheus.</span>
        </h1>
        <h2 className={styles.h2}></h2>
        <Image
          className={styles.gif}
          src='/demo-gifs/cloud-cluster-metrics.gif'
          alt='cloud-cluster-metrics-gif'
          width='700'
          height='350'
        />
      </div>
      {/* cost analysis */}
      <div className={styles.imageContainer}>
        <h1 className={styles.h1}>
          Optimize Kubernetes cluster deployment costs using monthly estimates
          from <span>Kubecost.</span>
        </h1>
        <Image
          className={styles.gif}
          src="/demo-gifs/cost-analysis.gif"
          alt="cost-analysis-gif"
          width="700"
          height="350"
        />
      </div>
      {/* cluster visualization */}
      <div className={styles.imageContainer}>
        <h1 className={styles.h1}>
          Visualize Kubernetes cluster and its resources using{' '}
          <span>Kubeview.</span>
        </h1>
        <Image
          className={styles.gif}
          src="/demo-gifs/visualizer.gif"
          alt="cluster-visualizer-gif"
          width="700"
          height="350"
        />
      </div>
    </div>
  );
};

export default Features;
