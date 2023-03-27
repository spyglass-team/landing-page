import { Card, Text } from '@nextui-org/react';
import Image from 'next/image';

const ContactCard = () => {
  return (
    <Card css={{ mw: '350px' }}>
      <Card.Body>
        <Image src='/cindy.png' alt='cindy-picture' height='300' width='300' />
        <h1>Cindy Chau</h1>
        <div className='svg'>
          <Image src='/github.svg' alt='github' height='50' width='50' />
          <Image src='/linkedin.svg' alt='linkedin' height='50' width='50' />
        </div>
      </Card.Body>
    </Card>
  );
};
export default ContactCard;
