import * as React from 'react';
import Head from 'next/head';
import styles from '../styles/Contact.module.css';
import CindyCard from '../components/cards/CindyCard';
import AlexCard from '../components/cards/AlexCard';
import EastonCard from '../components/cards/EastonCard';
import AnthonyCard from '../components/cards/AnthonyCard';

const contact = () => {
  return (
    <>
      <Head>
        <title>Spyglass | Contact Us </title>
        <meta name='keywords' content='Kubernetes'></meta>
      </Head>
      <div className={styles.container}>
        <CindyCard />
        <AlexCard />
        <EastonCard />
        <AnthonyCard />
      </div>
    </>
  );
};

export default contact;
