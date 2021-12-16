import React from 'react';
import Link from 'next/link';

export const Nav = () => {
  return (
    <div className='nav'>
      <Link href='/info/photography'>
        <a>Photography</a>
      </Link>
      <Link href='/info/packaging'>
        <a>Packaging</a>
      </Link>
      <Link href='/info/logodesign'>
        <a>Logos</a>
      </Link>
    </div>
  );
};
