import Head from 'next/head';
import styles from '../styles/Contact.module.css';
import ContactCard from '@/components/ContactCard';

const contact = () => {
  return (
    <>
      <Head>
        <title>Spyglass | Contact Us </title>
        <meta name='keywords' content='Kubernetes'></meta>
      </Head>
      <div className={styles.container}>
        <ContactCard />
      </div>
    </>
  );
};

export default contact;
