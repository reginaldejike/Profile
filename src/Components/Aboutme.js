import React from 'react';
import '../css/About.css';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';

import Button from './Button';

const Aboutme = ({ theme }) => {
  return (
    <>
      <div className='about'>
        <div className={theme === 'light' ? 'light' : 'dark'}>
          <div className='aboutme' id='aboutme'>
            <div className='container'>
              <h1 className='heading'>About Me</h1>
              <p className='para1'>
                Result-driven front-end developer with a passion for solving
                front-end-related problems. Skilled in various front-end skills
                and software engineering principles, proficient with tools such
                Html, JavaScript, Css, React js, Git, and, python. Proven
                ability to make responsive and interactive web applications and
                collaborate with cross-functional teams. Committed to continuous
                learning and seeking new challenges in front-end development to
                contribute to organizational success
              </p>
              <ul>
                <li>
                  <a href='http://github.com/pizzii' className='github icon'>
                    <AiFillGithub />
                  </a>
                </li>
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
              <div className='hire-btn'>
                <Button text={'Hire Me'} textColor={'#fff'} color={'#1c41b0'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
