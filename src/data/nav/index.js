import { AiOutlineHome, AiOutlineMessage, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiCodeAlt } from 'react-icons/bi';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { MdWorkOutline } from 'react-icons/md';
export { default as PT_LOGO } from '../../assets/img/pt-logo.png';

export const navListDesktop = [
  {
    id: 'home',
    sectionId: '#home',
    icon: <AiOutlineHome />,
    name: 'Home',
  },
  {
    id: 'about',
    sectionId: '#about',
    icon: <AiOutlineUser />,
    name: 'About me',
  },
  {
    id: 'skills',
    sectionId: '#skills',
    icon: <BiCodeAlt />,
    name: 'Skills',
  },
  {
    id: 'experience',
    sectionId: '#experience',
    icon: <MdWorkOutline />,
    name: 'Experience',
  },
  {
    id: 'education',
    sectionId: '#education',
    icon: <HiOutlineAcademicCap />,
    name: 'Education',
  },
  {
    id: 'portfolio',
    sectionId: '#portfolio',
    icon: <BiBook />,
    name: 'Portfolio',
  },
  {
    id: 'contact',
    sectionId: '#contact',
    icon: <AiOutlineMessage />,
    name: 'Contact',
  },
];

export const navListMobile = [
  {
    id: 'home',
    sectionId: '#home',
    icon: <AiOutlineHome />,
    name: 'Home',
  },
  {
    id: 'about',
    sectionId: '#about',
    icon: <AiOutlineUser />,
    name: 'About me',
  },
  {
    id: 'skills',
    sectionId: '#skills',
    icon: <BiCodeAlt />,
    name: 'Skills',
  },
  {
    id: 'experience',
    sectionId: '#experience',
    icon: <MdWorkOutline />,
    name: 'Experience',
  },
  {
    id: 'education',
    sectionId: '#education',
    icon: <HiOutlineAcademicCap />,
    name: 'Education',
  },
  {
    id: 'portfolio',
    sectionId: '#portfolio',
    icon: <BiBook />,
    name: 'Portfolio',
  },
  {
    id: 'contact',
    sectionId: '#contact',
    icon: <AiOutlineMessage />,
    name: 'Contact',
  },
];
