import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link href='/'>
        <Image
          src='/side-logo.png'
          alt='spyglass-logo'
          width='330'
          height='60'
        />
      </Link>
      <div>
        <Link href='https://github.com/oslabs-beta/spyglass'>Github</Link>
        <Link href='#'>Press</Link>
        <Link href='/contact'>Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
