import React, { useRef } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdOutlineEmail } from 'react-icons/md';

import './contact.css';

export const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <form
          action='https://formspree.io/f/xlezwqkd'
          method='POST'
          target='_blank'
        >
          <input type='text' name='name' placeholder='Name' required />
          <input type='email' name='email' placeholder='Email' required />
          <textarea name='message' rows='5' placeholder='Message' required />
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
