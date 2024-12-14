import React, { useState } from 'react';
import { AiOutlineTool } from 'react-icons/ai';
import { BsGearWideConnected } from 'react-icons/bs';
import { FaAward } from 'react-icons/fa';
import { VscDebugDisconnect } from 'react-icons/vsc';
import { HiDatabase, HiCubeTransparent } from 'react-icons/hi';
import { MdWeb } from 'react-icons/md';
import { MdExpandMore } from 'react-icons/md';

import {
  backend,
  certifications,
  database,
  dataProtocol,
  frontend,
  patterns,
  tools,
} from '../../data/skills/index';

import './skills.css';

export const Skills = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const skillSections = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <MdWeb />,
      items: frontend,
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <BsGearWideConnected />,
      items: backend,
    },
    {
      id: 'database',
      title: 'Database',
      icon: <HiDatabase />,
      items: database,
    },
    {
      id: 'protocol',
      title: 'Data Protocol',
      icon: <VscDebugDisconnect />,
      items: dataProtocol,
    },
    {
      id: 'patterns',
      title: 'Dev. Methodologies / Patterns',
      icon: <HiCubeTransparent />,
      items: patterns,
    },
    {
      id: 'tools',
      title: 'Tools',
      icon: <AiOutlineTool />,
      items: tools,
    },
    {
      id: 'certifications',
      title: 'Certifications',
      icon: <FaAward />,
      items: certifications,
      isCertification: true,
    },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="container skill__container">
        {skillSections.map(({ id, title, icon, items, isCertification }) => (
          <SkillSection
            key={id}
            id={id}
            title={title}
            icon={icon}
            items={items}
            isExpanded={expandedSections[id]}
            toggleSection={() => toggleSection(id)}
            isCertification={isCertification}
          />
        ))}
      </div>
    </section>
  );
};

const SkillSection = ({
  title,
  icon,
  items,
  isExpanded,
  toggleSection,
  isCertification,
}) => (
  <div className="skill">
    <div className="skill__header" onClick={toggleSection}>
      <div className="skill__description">
        {icon}
        <h4>{title}</h4>
      </div>
      <span className={`skill__arrow ${isExpanded ? 'show-items' : ''}`}>
        <MdExpandMore />
      </span>
    </div>
    <div className={`${isCertification ? 'skill__items-certs' : 'skill__items'} ${
  isExpanded ? 'show-items' : ''
}`}
>
      {isCertification
        ? items.map(({ id, logo, title, entity, descr, date, credentialURL }) => (
            <div className="skill__cert" key={id}>
              <img src={logo} alt={`${title} Logo`} />
              <div className="skill__cert-details">
                <h3 className="skill__cert-title">{title}</h3>
                <h4 className="skill__cert-entity">{entity}</h4>
                <p>{descr}</p>
                <h5 className="skill__cert-date">{date}</h5>
                <a
                  href={credentialURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skill__cert-view"
                >
                  Show Credential
                </a>
              </div>
            </div>
          ))
        : items.map(({ id, technology, level }) => (
            <div className="skill__item" key={id}>
              <h3>{technology}</h3>
              {/* <h5>{level}</h5> */}
            </div>
          ))}
    </div>
  </div>
  );

