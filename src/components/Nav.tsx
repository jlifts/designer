import React from 'react';
import { Link as LinkS } from 'react-scroll';

export const Nav = () => {
  return (
    <div className='nav'>
      <LinkS to='works' smooth={true} duration={500} spy={true} exact='true'>
        <a>Deigns</a>
      </LinkS>
      <LinkS to='contact' smooth={true} duration={500} spy={true} exact='true'>
        <a>Connect</a>
      </LinkS>
      <LinkS to='bio' smooth={true} duration={500} spy={true} exact='true'>
        <a>Bio</a>
      </LinkS>
    </div>
  );
};
