import React from 'react';
import ME from '../../assets/img/me-about.png';
import {
  aboutMeData,
  aboutMeList,
  outerCircleIcons,
} from '../../data/about/index';

import './about.css';

export const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        {/* Profile Area */}
        <ProfileArea />

        {/* About Content */}
        <div className="about__content">
          <AboutDetails />
          <AboutList />
        </div>
      </div>
    </section>
  );
};

// Component for the profile image and icons
const ProfileArea = () => (
  <div className="about__me-area">
    <div className="about__me-outer-circle">
      {outerCircleIcons.map((icon, index) => (
        <span key={index}>{icon}</span>
      ))}
    </div>
    <div className="about__me-inner-circle">
      <img src={ME} alt="About Me" />
    </div>
  </div>
);

// Component for About Details
const AboutDetails = () => (
  <>
    {aboutMeData.map(({ title, location, descr }, index) => (
      <div key={index}>
        <h2 className="about__title">{title}</h2>
        <h3 className="about__location">{location}</h3>
        <p className="about__description">{descr}</p>
      </div>
    ))}
  </>
);

// Component for the list of additional details
const AboutList = () => (
  <ul className="about__list">
    {aboutMeList.map(({ title, descr }, index) => (
      <li className="about__list-item" key={index}>
        <h3>{title}</h3>
        <span>{descr}</span>
      </li>
    ))}
  </ul>
);

export default About;
