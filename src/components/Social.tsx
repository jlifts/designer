import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faDribbbleSquare,
} from '@fortawesome/free-brands-svg-icons';

const Social = () => {
  return (
    <div className='socials'>
      <a
        href='https://www.linkedin.com/in/burgess-josh/'
        target='blank'
        className='linkedin social'
      >
        <FontAwesomeIcon icon={faLinkedin} size='2x' />
      </a>
      <a href='https://dribble.com' target='blank' className='dribble social'>
        <FontAwesomeIcon icon={faDribbbleSquare} size='2x' />
      </a>
    </div>
  );
};
export default Social;
