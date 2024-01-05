import React, { useState, useRef } from 'react';
import { CiMail } from 'react-icons/ci';
import { BsTelephoneInbound } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import '../css/Contactme.css';

const Contactme = ({ theme }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const form = useRef();

  const handleSend = (e) => {
    e.preventDefault();
    if (!(fullName && email && msg)) {
      alert('Please fill in the fields');
    } else {
      emailjs
        .sendForm(
          'service_xu5zbz9',
          'template_qdtjwiv',
          form.current,
          'Cefwa7r9MJGvDnK1r'
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log('message sent');
            alert('Message sent');
          },
          (error) => {
            console.log(error.text);
            alert('Message not sent ');
          }
        );
    }
  };
  return (
    <>
      <div className='contact' id='contactme'>
        <div className='contact-content'>
          <div className='info'>
            <h1>Get In Touch</h1>
            <p>
              Please feel free to get in touch with me whenever my services are
              needed.
            </p>
            <div className='sub-info'>
              <ul>
                <li>
                  <a
                    href='https://www.linkedin.com/in/reginald-ejike-168143200/'
                    className='linkedin icon'
                  >
                    <AiFillLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href='https://twitter.com/reginald_ejike'
                    className='twitter icon'
                  >
                    <AiFillTwitterSquare />
                  </a>
                </li>
              </ul>
              <p>-Reginald Ejike</p>
            </div>
            <div className='icon-control'>
              <div>
                <a
                  href="mailto:'reginaldejike3@gmail.com'"
                  className='sub-icon'
                >
                  <CiMail color={'#2351dc'} size={'2rem'} />
                  <div className='icon-info'>
                    <p className='para1'>reginaldejike3@gmail.com</p>
                    <p className='para2'>Send a mail anytime</p>
                  </div>
                </a>
              </div>
              <div>
                <a href='tel:"+2348189282143"' className='sub-icon'>
                  <BsTelephoneInbound color={'#2351dc'} size={'2rem'} />
                  <div className='icon-info'>
                    <p className='para1'>+2348189282143</p>
                    <p className='para2'>Put a call at anytime</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className='service-info'>
            <p className='para1'>Need a Service?</p>
            <p className='para2'>Send A Message</p>
            <form ref={form} onSubmit={handleSend}>
              <input
                type='text'
                placeholder='Enter Fullname'
                value={fullName}
                name='user_name'
                onChange={(e) => setFullName(e.target.value)}
              />
              <input
                type='email'
                placeholder='Enter Email Address'
                value={email}
                name='user_email'
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                name='message'
                id=''
                placeholder='Write A Message'
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              ></textarea>
              <button className='btn' value='Send'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactme;
