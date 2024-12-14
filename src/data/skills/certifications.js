import HARVARD_LOGO from '../../assets/img/harvard-logo.png';
import INRH_LOGO from '../../assets/img/inrh-logo.png';
import ORACLE_LOGO from '../../assets/img/oracle-logo.png';
import DEVOPS_LOGO from '../../assets/img/devops-logo.png';

const certifications = [
  {
    logo: DEVOPS_LOGO,
    title: 'DevSecOps Foundation (DSOF)℠ Certification',
    entity: 'DevOps Institute',
    descr: (
      <p className='skill__cert-descr'>
        DevSecOps, Shift left, Security as Code are some of the interlacing paradigm shifts{' '}
        <b>aiming to deliver secure software early and often.</b> The DevSecOps practitioner course is carefully
        designed to help you understand the principles, practices, tools, and techniques that are essential for any
        organization to get started with and mature organically in DevSecOps. This 16 hour corse is designed to be
        highly interactive, and hands on by DevSecOps veterans that bring their lessons working from the trenches.
      </p>
    ),
    date: 'Issued Jul 2022 · Expiration Date: Jul 2024',
    credentialURL: 'https://www.dropbox.com/s/hkrirkiqj1q5b1b/DevOps_DSOF_Certificate.pdf?dl=0',
  },
  {
    logo: ORACLE_LOGO,
    title: 'Java SE 8: Programming I',
    entity: 'Oracle',
    descr: (
      <p className='skill__cert-descr'>
        The Java SE 8 Programmer I course, which is in line with the Oracle Certified Associate (OCA) Certification
        learning path, is aimed at anyone who is keen on <b>learning the fundamentals of Java programming</b> and
        looking to take the OCA Certification (1Z0-808). It delves into topics such as <b>declarations</b>,{' '}
        <b>flow control</b>, <b>collections</b> and <b>memory management</b>.
      </p>
    ),
    date: 'Issued Nov 2021 · No Expiration Date',
    credentialURL: 'https://www.dropbox.com/s/28zllb4p5ho68gk/Oracle.pdf?dl=0',
  },
  {
    logo: HARVARD_LOGO,
    title: "CS50's Web Programming",
    entity: 'Harvard University (edX)',
    descr: (
      <p className='skill__cert-descr'>
        Design and implementation of web apps with <b>Python</b>, <b>JavaScript</b>, and <b>SQL</b> using frameworks
        like <b>Django</b>, <b>React</b>, and <b>Bootstrap</b>. Topics include database design, scalability, security,
        and user experience. 5 projects were developed and presented to successfully complete this certification.
      </p>
    ),
    date: 'Issued Jun 2020 · No Expiration Date',
    credentialURL: 'http://cs50.harvard.edu/certificates/064d7f0c-97ac-495a-b8e1-9c0412bc8c42',
  },
  {
    logo: INRH_LOGO,
    title: 'Pedagogical Formation of Trainer',
    entity: 'INRH, Portugal',
    descr: (
      <p className='skill__cert-descr'>
        Pedagogical Formation that develop the skills and knowledge inherent to the role of Adult Trainer.{' '}
      </p>
    ),
    date: 'Issued Jun 2020 · No Expiration Date',
    credentialURL: 'https://www.dropbox.com/s/4qf6j2nk91yg8zg/Certificado%20CCP.png?dl=0',
  },
];

export default certifications;
