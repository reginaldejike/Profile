import React from 'react';
import { CiMail } from 'react-icons/ci';
import { BsTelephoneInbound } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import '../styles/Contactme.css';

const Contactme = () => {
  return (
    <>
      <div className='contact' id='contactme'>
        <div className='contact-content'>
          <div className='info'>
            <h1>Get In Touch</h1>
            <p>
              Please free to get in touch with me when ever my services are
              needed.
            </p>
            <div className='sub-info'>
              <ul>
                <li>
                  <a href='https://www.linkedin.com/in/reginald-ejike-168143200/'>
                    <AiFillLinkedin size={'3rem'} border={'50%'} />
                  </a>
                </li>
                <li>
                  <a href='https://twitter.com/reginald_ejike'>
                    <AiFillTwitterSquare size={'3rem'} />
                  </a>
                </li>
              </ul>
              <p>-Reginald Ejike</p>
            </div>
            <div className='icon-control'>
              <div className='sub-icon'>
                <CiMail color={'#2351dc'} size={'2rem'} />
                <div className='icon-info'>
                  <p className='para1'>reginaldejike3@gmail.com</p>
                  <p className='para2'>Send a mail anytime</p>
                </div>
              </div>
              <div className='sub-icon'>
                <BsTelephoneInbound color={'#2351dc'} size={'2rem'} />
                <div className='icon-info'>
                  <p className='para1'>+2348189282143</p>
                  <p className='para2'>Put a call at anytime</p>
                </div>
              </div>
            </div>
          </div>
          <div className='service-info'>
            <p className='para1'>Need a Service?</p>
            <p className='para2'>Send A Message</p>
            <form action=''>
              <input type='text' placeholder='Enter Fullname' />
              <input type='email' placeholder='Enter Email Address' />
              <textarea name='' id='' placeholder='Write A Message'></textarea>
              <button className='btn'>Send Message </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactme;
