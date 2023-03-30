import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Head>
        <script async defer src='https://buttons.github.io/buttons.js'></script>
      </Head>
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
        <Link href='https://medium.com/@spyglassopensource/b94503c51bf3'>
          Press
        </Link>
        <Link href='/contact'>Contact Us</Link>
        <Link href='https://github.com/oslabs-beta/spyglass' legacyBehavior>
          <a
            className='github-button'
            data-show-count='true'
            data-size='large'
            aria-label='Star oslabs-beta/spyglass on GitHub'
          >
            Star
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
