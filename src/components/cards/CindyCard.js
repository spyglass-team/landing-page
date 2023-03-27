import { Card } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

const CindyCard = () => {
  return (
    <Card style={{ maxWidth: '300px', margin: 'auto', padding: '5px' }}>
      <Card.Body>
        <Image
          src='/cindy.png'
          alt='cindy-picture'
          height='250'
          width='250'
          style={{ margin: 'auto' }}
        />
        <br />
        <h1>Cindy Chau</h1>
        <h2>Software Engineer</h2>
        <br />
        <div
          style={{
            display: 'flex',
          }}
        >
          <div style={{ marginRight: '10px' }}>
            <Link href='https://github.com/cindychau1'>
              <Image src='/github.svg' alt='github' height='60' width='60' />
            </Link>
          </div>
          <Link href='https://www.linkedin.com/in/cindychau11/'>
            <Image src='/linkedin.svg' alt='linkedin' height='60' width='60' />
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};
export default CindyCard;