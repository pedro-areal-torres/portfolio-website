import React from 'react';
import { BsCalendar3 } from 'react-icons/bs';
import { FiLink } from 'react-icons/fi';

import {
  workExperience, instructorExperience
} from '../../data/experience/index';

import './experience.css';

export const Experience = () => {
  return (
    <>
      <Section title="Experience as Developer" experiences={workExperience} />
      <Section title="Experience as IT Instructor" experiences={instructorExperience} />
    </>
  );
};

const Section = ({ title, experiences }) => (
  <section>
    <h2>{title}</h2>
    <div className="experience__container container">
      <div className="experience__sections">
        <div className="experience__content" id="work">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} data={exp} isOdd={index % 2 === 1} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ExperienceItem = ({ data, isOdd }, index) => {
  const { logo, title, company, link, duration } = data;
  return (
    <div className="experience__data">
      {/* Left-aligned content for odd items */}
      {isOdd && <ExperienceContent logo={logo} title={title} company={company} link={link} duration={duration} />}

      {/* Timeline indicators */}
      {!isOdd && <div></div>}
      <div>
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>

      {/* Right-aligned content for even items */}
      {!isOdd && <ExperienceContent logo={logo} title={title} company={company} link={link} duration={duration} index={index}/>}
    </div>
  );
};

const ExperienceContent = ({ logo, title, company, link, duration, index }) => (
  <div className={`experience__data--${index ? 'even' : 'odd'}`}>
    <span>
      <img src={logo} alt={`${company} Logo`} className={`experience__logo ${company !== 'ETM Textile' && 'experience__logo--saturate'}`} />
    </span>
    <h3 className="experience__title">{title}</h3>
    <a href={link} target="_blank" rel="noreferrer" className="experience__subtitle">
      {company} <FiLink className="experience__hyperlink" />
    </a>
    <div className="experience__calendar">
      <BsCalendar3 className="experience__calendar-icon" /> {duration}
    </div>
  </div>
);
