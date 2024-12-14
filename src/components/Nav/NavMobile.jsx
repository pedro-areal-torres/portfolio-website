import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

import { navListDesktop, PT_LOGO } from '../../data/nav/index';

import './navMobile.css';

export const NavMobile = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  const showHideNav = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <nav className='nav__container-mobile'>
      <img src={PT_LOGO} alt='Website Logo' className='nav__logo' />
      <div className={`nav__menu ${showNavBar ? 'show-menu' : ''}`} id='nav-menu'>
        <ul className='nav__list'>
          {navListDesktop.map(({ id, sectionId, icon, name }) => {
            return (
              <li className='nav__item' key={id}>
                <a href={sectionId} className='nav__link'>
                  <span className='nav__icon'>{icon}</span>
                  <span className='nav__descr'>{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <MdClose className='nav__close' id='nav-close' onClick={showHideNav} />
      </div>
      <div className='nav__btns'>
        <div className='nav__toggle' id='nav-toggle' onClick={showHideNav}>
          <FiMenu />
        </div>
      </div>
    </nav>
  );
};
