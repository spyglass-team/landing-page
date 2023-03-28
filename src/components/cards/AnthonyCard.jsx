import * as React from 'react';
import { Card } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

const AnthonyCard = () => {
  return (
    <Card style={{ maxWidth: '250px', margin: 'auto', padding: '5px' }}>
      <Card.Body>
        <Image
          src='/anthony.png'
          alt='anthony-picture'
          height='200'
          width='200'
          style={{ margin: 'auto' }}
        />
        <br />
        <h2>Anthony Vega</h2>
        <h3>Software Engineer</h3>
        <br />
        <div
          style={{
            display: 'flex',
          }}
        >
          <div style={{ marginRight: '10px' }}>
            <Link href='https://github.com/anthonyrvega'>
              <Image src='/github.svg' alt='github' height='40' width='40' />
            </Link>
          </div>
          <Link href='https://www.linkedin.com/in/anthony-r-vega/'>
            <Image src='/linkedin.svg' alt='linkedin' height='40' width='40' />
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};
export default AnthonyCard;
