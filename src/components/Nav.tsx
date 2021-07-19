import React from 'react';
import Link from 'next/link';

export const Nav = () => {
  return (
    <div className='nav'>
      <Link href='/info'>
        <a>Photography</a>
      </Link>
      <Link href='/#'>
        <a>Packaging</a>
      </Link>
      <Link href='/#'>
        <a>Logos</a>
      </Link>
    </div>
  );
};
