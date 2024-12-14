import React from 'react';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import portfolioProj from '../../data/portfolio/index';

// Import Swiper styles
import './swiper.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects = () => {
  return (
    <div className='portfolio__content'>
      <Swiper
        loop={true}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className='product-images-slider'
      >
        {portfolioProj.map(
          ({
            name,
            img,
            descr,
            shortDescr,
            techs,
            creationUpdateDt,
            codeUrl,
            demoUrl,
            liveDemoUrl,
          }, index) => (
            <SwiperSlide key={index}>
              <div className='portfolio__slide'>
                <img src={img} alt='Slider' className='portfolio__img' />
                <div className='portfolio__details'>
                  <h2 className='portfolio__details-title'>{name}</h2>
                  <div className='portfolio__details desktop'>{descr}</div>
                  <div className='portfolio__details mobile'>{shortDescr}</div>
                  <div className='portfolio__tech'>
                    <h4 className='portfolio__tech-title'>
                      Technologies
                      <span className='portfolio__tech-ddots'>:</span>
                    </h4>
                    <div className='portfolio__tech-list'>
                      {techs.map(({ name, url }, index) => {
                        return (
                          <div key={index}>
                            <a
                              href={url}
                              target='_blank'
                              className='portfolio__tech-item'
                              
                            >
                              {name}
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <p className='portfolio__details-creationdt'>
                    {creationUpdateDt}
                  </p>
                  <div className='portfolio__btn'>
                    {codeUrl && (
                      <>
                        <a href={codeUrl} target='_blank' rel='noreferrer'>
                          <button className='btn btn-code'>GitHub Code</button>
                        </a>
                      </>
                    )}
                    {demoUrl && (
                      <>
                        <a href={demoUrl} target='_blank' rel='noreferrer'>
                          <button className='btn btn-primary'>Demo</button>
                        </a>
                      </>
                    )}
                    {liveDemoUrl && (
                      <>
                        <a href={liveDemoUrl} target='_blank' rel='noreferrer'>
                          <button className='btn btn-primary'>Live Demo</button>
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default Projects;
