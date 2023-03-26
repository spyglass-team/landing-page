import { Link, Navbar } from '@nextui-org/react';
import Image from 'next/image';

const nav = () => {
  return (
    <Navbar className='navbar'>
      <Link href='#'>
        <Image
          src='/side-logo.png'
          alt='spyglass-logo'
          width='250'
          height='50'
        />
      </Link>
      <div>
        <Link href='https://github.com/oslabs-beta/spyglass'>Github</Link>
        <Link href='#'>LinkedIn</Link>
        <Link href='#'>Press</Link>
        <Link href='#'>Contact Us</Link>
      </div>
    </Navbar>
  );
};

export default nav;
