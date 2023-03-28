import * as React from 'react';
import { Card } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

const CindyCard = () => {
  return (
    <Card style={{ maxWidth: '250px', margin: 'auto', padding: '5px' }}>
      <Card.Body>
        <Image
          src='/cindy.png'
          alt='cindy-picture'
          height='200'
          width='200'
          style={{ margin: 'auto' }}
        />
        <br />
        <h2>Cindy Chau</h2>
        <h3>Software Engineer</h3>
        <br />
        <div
          style={{
            display: 'flex',
          }}
        >
          <div style={{ marginRight: '10px' }}>
            <Link href='https://github.com/cindychau1'>
              <Image src='/github.svg' alt='github' height='40' width='40' />
            </Link>
          </div>
          <Link href='https://www.linkedin.com/in/cindychau11/'>
            <Image src='/linkedin.svg' alt='linkedin' height='40' width='40' />
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};
export default CindyCard;
