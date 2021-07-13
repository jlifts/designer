import React from 'react';
import Form from './Form';

const Contact = () => {
  return (
    <section className='contact'>
      <h2 className='skew'>Your Next Design Awaits</h2>
      <div className='contact-container'>
        <img
          src='/images/Group 8.svg'
          alt='Flavor Text'
          height={300}
          width={300}
        />
        <Form />
      </div>
    </section>
  );
};

export default Contact;
