import React from 'react';

import CV from '../../assets/doc/CV-Pedro Torres.pdf';

export const HomeCTA = () => {
  return (
    <div className='cta'>
      <a href='#about' className='btn'>
        About Me
      </a>
      <a href={CV} download='CV-Pedro Torres' className='btn btn-primary' target='_blank'>
        Download CV
      </a>
    </div>
  );
};
