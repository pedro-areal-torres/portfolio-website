import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

export const HomeSocial = () => {
  return (
    <div className='home__socials'>
      <a href='https://www.linkedin.com/in/pedro-areal-torres/' target='_blank' rel='noreferrer'>
        <BsLinkedin />
      </a>
      <a href='https://github.com/pedro-areal-torres' target='_blank' rel='noreferrer'>
        <FaGithub />
      </a>
    </div>
  );
};
