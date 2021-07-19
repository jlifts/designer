import React from 'react';

function PicRoll({ pic, pic1, pic2, pic3, pic4, pic5, pic6 }) {
  return (
    <div className='Pic-wrapper'>
      <img className='Photo' src={pic} alt='' />
      <img className='Photo' src={pic1} alt='' />
      <img className='Photo' src={pic2} alt='' />
      <img className='Photo' src={pic3} alt='' />
      <img className='Photo' src={pic4} alt='' />
      <img className='Photo' src={pic5} alt='' />
      <img className='Photo' src={pic6} alt='' />
    </div>
  );
}

export default PicRoll;
