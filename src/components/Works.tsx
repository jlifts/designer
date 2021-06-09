import React from 'react';
import Card from './InfoCards';

const Works = () => {
  return (
    <section className='works'>
      <h1>Designs</h1>
      <div className='card-container'>
        <span className='card1'>
          <Card
            title='Photography'
            imageUrl='/images/cheryl-stone-wash-lifestyle-shot.jpg'
            body='lorem ipsum delor unao uobac jbfiyr ajann ieubdc qiebc jebco uebc ocibwor kwb ocnwo wejnbcvo wocn woinc'
          />
        </span>
        <span className='card2'>
          <Card
            title='Videography'
            imageUrl='/images/Pillow Photography 2.jpg'
            body='lorem ipsum delor unao uobac jbfiyr ajann ieubdc qiebc jebco uebc ocibwor kwb ocnwo wejnbcvo wocn woinc'
          />
        </span>
        <span className='card3'>
          <Card
            title='Packaging'
            imageUrl='/images/Packaging.jpg'
            body='lorem ipsum delor unao uobac jbfiyr ajann ieubdc qiebc jebco uebc ocibwor kwb ocnwo wejnbcvo wocn woinc'
          />
        </span>
        <span className='card4'>
          <Card
            title='Logo Design'
            imageUrl='/images/Eclipse Decor Logo-03.jpg'
            body='lorem ipsum delor unao uobac jbfiyr ajann ieubdc qiebc jebco uebc ocibwor kwb ocnwo wejnbcvo wocn woinc'
          />
        </span>
      </div>
    </section>
  );
};

export default Works;
