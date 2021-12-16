import React from 'react';

interface IPic {
  pic: string;
  pic1?: string;
  pic2?: string;
  pic3?: string;
  pic4?: string;
  pic5?: string;
  pic6?: string;
}

function PicRoll({ pic, pic1, pic2, pic3, pic4, pic5, pic6 }: IPic) {
  return (
    <div className='Pic-wrapper'>
      <img className='Photo' src={pic} alt='' />
      {pic1 && <img className='Photo' src={pic1} alt='' />}
      {pic2 && <img className='Photo' src={pic2} alt='' />}
      {pic3 && <img className='Photo' src={pic3} alt='' />}
      {pic4 &&<img className='Photo' src={pic4} alt='' />}
      {pic5 &&<img className='Photo' src={pic5} alt='' />}
      {pic6&& <img className='Photo' src={pic6} alt='' />}
    </div>
  );
}

export default PicRoll;
