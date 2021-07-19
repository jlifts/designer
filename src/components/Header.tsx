import React from 'react';
import Link from 'next/link';

function Header({ infoTitle }) {
  return (
    <div>
      <div className='exit'>
        <Link href='/'>X</Link>
      </div>
      <h1 className='info-title'>{infoTitle}</h1>
      <div className='divider-info'></div>
    </div>
  );
}

export default Header;
