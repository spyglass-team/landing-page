import * as React from 'react';
import { Card } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

const AlexCard = () => {
  return (
    <Card style={{ maxWidth: '250px', margin: 'auto', padding: '5px' }}>
      <Card.Body>
        <Image
          src='/alex.png'
          alt='alex-picture'
          height='200'
          width='200'
          style={{ margin: 'auto' }}
        />
        <br />
        <h1>Alex Czaja</h1>
        <h2>Software Engineer</h2>
        <br />
        <div
          style={{
            display: 'flex',
          }}
        >
          <div style={{ marginRight: '10px' }}>
            <Link href='https://github.com/aczaja85'>
              <Image src='/github.svg' alt='github' height='40' width='40' />
            </Link>
          </div>
          <Link href='https://www.linkedin.com/in/alex-czaja/'>
            <Image src='/linkedin.svg' alt='linkedin' height='40' width='40' />
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};
export default AlexCard;
