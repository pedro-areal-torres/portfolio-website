import React from 'react';
import { BsCalendar3 } from 'react-icons/bs';
import { FiLink } from 'react-icons/fi';

import educationData from '../../data/education/index';

import './education.css';

export const Education = () => {
  return (
    <section id='education'>
      <h2>Education</h2>
      <div className='education__container container'>
        <div className='education__sections'>
          {educationData.map((item, index) => (
            <EducationItem key={index} data={item} isOdd={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationItem = ({ data, isOdd }) => {
  const { logo, title, institution, link, duration } = data;
  return (
    <div className='education__data'>
      {/* Content on Left for Odd Items */}
      {isOdd && (
        <div className='education__data--odd'>
          <EducationContent logo={logo} title={title} institution={institution} link={link} duration={duration} />
        </div>
      )}

      {/* Timeline Markers */}
      {!isOdd && <div></div>}
      <div>
        <span className='education__rounder'></span>
        {isOdd && <span className='education__line'></span>}
      </div>

      {/* Content on Right for Even Items */}
      {!isOdd && (
        <div className='education__data--even'>
          <EducationContent logo={logo} title={title} institution={institution} link={link} duration={duration} />
        </div>
      )}
    </div>
  );
};

const EducationContent = ({ logo, title, institution, link, duration }) => (
  <>
    <span>
      <img src={logo} alt={`${title} Logo`} className='education__logo education__logo--saturate' />
    </span>
    <h3 className='education__title'>{title}</h3>
    <a href={link} target='_blank' rel='noreferrer' className='education__subtitle'>
      {institution} <FiLink className='experience__hyperlink' />
    </a>
    <div className='education__calendar'>
      <BsCalendar3 className='education__calendar-icon' /> {duration}
    </div>
  </>
);
