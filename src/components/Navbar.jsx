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
        <Link href='#'>Press</Link>
        <Link href='/contact'>Contact Us</Link>
        <div className='github-star-container'>
          <a
            className='github-button'
            href='https://github.com/oslabs-beta/spyglass'
            data-icon='octicon-star'
            data-size='large'
            data-show-count='true'
            aria-label='Star oslabs-beta/spyglass on GitHub'
          >
            Star
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
