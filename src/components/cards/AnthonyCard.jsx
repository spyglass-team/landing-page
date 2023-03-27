import * as React from 'react';
import { Card } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

const AnthonyCard = () => {
  return (
    <Card style={{ maxWidth: '300px', margin: 'auto', padding: '5px' }}>
      <Card.Body>
        <Image
          src='/anthony.png'
          alt='anthony-picture'
          height='250'
          width='250'
          style={{ margin: 'auto' }}
        />
        <br />
        <h1>Anthony Vega</h1>
        <h2>Software Engineer</h2>
        <br />
        <div
          style={{
            display: 'flex',
          }}
        >
          <div style={{ marginRight: '10px' }}>
            <Link href='https://github.com/anthonyrvega'>
              <Image src='/github.svg' alt='github' height='60' width='60' />
            </Link>
          </div>
          <Link href='https://www.linkedin.com/in/anthony-r-vega/'>
            <Image src='/linkedin.svg' alt='linkedin' height='60' width='60' />
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};
export default AnthonyCard;
