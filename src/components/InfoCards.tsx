import React from 'react';

function Card({ title, imageUrl, body }) {
  return (
    <div className='card-container'>
      <img
        src={imageUrl}
        className='card-image'
        alt='card'
        height={250}
        width={250}
      />
      <div className='overlay'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text'>{body}</p>
      </div>
    </div>
  );
}

export default Card;
