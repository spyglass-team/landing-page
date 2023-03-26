import Image from 'next/image';
import Link from 'next/link';

const nav = () => {
  return (
    <nav className='navbar'>
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
    </nav>
  );
};

export default nav;
