import React from 'react';
import { BsMouseFill } from 'react-icons/bs';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Typewriter from 'typewriter-effect';

import { TypewriterStrings } from '../../data/home/index';
import { HomeCTA } from './HomeCTA';
import { HomeSocial } from './HomeSocial';

import './home.css';

export const Home = () => {
  return (
    <section id='home' className='section__home'>
      <div className='container home__container'>
        {/* 
        <Particles params={particlesConfig} />
        */}
        <h3>Hello I'm</h3>
        <h1>Pedro Torres</h1>
        <Typewriter
          component={'span'}
          options={{
            delay: 50,
            deleteSpeed: 25,
            strings: TypewriterStrings,
            autoStart: true,
            loop: true,
          }}
        />
        <HomeCTA />
        <HomeSocial />

        <a href='#about' className='home__scroll'>
          <BsMouseFill className='home__scroll-icon' />
          <span className='home__scroll-name'>Scroll Down </span>
          <span className='home__scroll-arrow'>
            <HiArrowNarrowRight />
          </span>
        </a>
      </div>
    </section>
  );
};
