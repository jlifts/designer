import React from 'react';

function Skills({ skill, skill1, skill2 }) {
  return (
    <div className='skill-wrapper'>
      <p className='skill-name'>{skill}</p>
      <div className='dash'> - </div>
      <p className='skill-name'>{skill1}</p>
      <div className='dash'> - </div>
      <p className='skill-name'>{skill2}</p>
    </div>
  );
}

export default Skills;
