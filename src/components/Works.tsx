import Link from 'next/link';
import React from 'react';
import Card from './InfoCards';

const Works = () => {

  return (
    <section className='works'>
      <h1 className='skew'>Designs</h1>
      <div className='card-container'>
        <Link href='/info/photography'>
          <span className='card1 skew'>
            <Card
              title='Photography'
              imageUrl='/images/cheryl-stone-wash-lifestyle-shot.jpg'
              body='Capturing the elaborate details of home décor in a language that
helps the client understand what they will be purchasing'
            />
          </span>
        </Link>
        <Link href='/info/videography'>
          <span className='card2 skew'>
            <div className='card-container'>
              <video
                className='card-image'
                loop
                autoPlay
                muted
                src='/videos/Fluff1.mp4'
                height={330}
                width={330}
              />
              <div className='overlay'>
                <h4 className='card-title'>Videography</h4>
                <p className='card-text'>
                  Creating short clips that display the movement in home décor that
is often overlooked
                </p>
              </div>
            </div>
          </span>
        </Link>
        <Link href='/info/packaging'>
          <span className='card3 skew'>
            <Card
              title='Packaging'
              imageUrl='/images/Packaging.jpg'
              body='The representation of a brand’s essence designed to catch the client’s
attention through a hierarchy of graphics'
            />
          </span>
        </Link>
        <Link href='/info/logodesign'>
          <span className='card4 skew'>
            <Card
              title='Logo Design'
              imageUrl='/images/Eclipse Decor Logo-03.jpg'
              body='Designing memorable symbols that create a clear understanding of
an organization’s brand and values'
            />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Works;
