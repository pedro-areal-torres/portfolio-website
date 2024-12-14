import COMMING_SOON from '../../assets/img/coming-soon.gif';
import WORDLE_GAME from '../../assets/img/wordle.gif';

const portfolioProj = [
  {
    name: 'Wordle Game',
    img: WORDLE_GAME,
    descr: (
      <p className='portfolio__details-description'>
        Wordle is an online 5-letter word game. Usually each day a new word is
        released, but <b>on this version you can play as many times you want</b>
        . Players have six attempts to guess what the word of the day is. During
        the guesses, tiles will change colour to help players get the word.
      </p>
    ),
    shortDescr: (
      <p className='portfolio__details-description'>
        Wordle is an online 5-letter word game. Usually each day a new word is
        released, but <b>on this version you can play as many times you want</b>.
      </p>
    ),
    techs: [
      {
        name: 'ReactJS',
        url: 'https://reactjs.org/',
      },
      {
        name: 'React Hooks',
        url: 'https://reactjs.org/docs/hooks-intro.html',
      },
      {
        name: 'API Context',
        url: 'https://reactjs.org/docs/context.html',
      },
    ],
    creationUpdateDt: 'Created on: April 2022 · Last Update: April 2022',
    codeUrl: 'https://github.com/pedro-areal-torres/Wordle-Game',
    liveDemoUrl: 'https://gorgeous-speculoos-305690.netlify.app/',
  },
  {
    name: 'Laboratory Management',
    img: COMMING_SOON,
    descr: (
      <p className='portfolio__details-description'>
        Web app designed for precision measuring of yarn, threads, fiber, non
        woven fabrics & various other textile materials.
      </p>
    ),
    shortDescr: (
      <p className='portfolio__details-description'>
        Web app designed for precision measuring of yarn, threads, fiber, non
        woven fabrics & various other textile materials.
      </p>
    ),
    techs: [
      {
        name: 'ReactJS',
        url: 'https://reactjs.org/',
      },
      {
        name: 'React Query',
        url: 'https://react-query-v3.tanstack.com/',
      },
      {
        name: 'NestJS Redux',
        url: 'https://nestjs.com/',
      },
      {
        name: 'TypeOrm',
        url: 'https://typeorm.io/',
      },
      {
        name: 'SQL',
        url: 'https://www.mysql.com/',
      },
    ],
    creationUpdateDt: 'Release date: 2Q 2025',
  },
];

export default portfolioProj;
