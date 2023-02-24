import React from 'react';
import '../styles/About.css';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { FaSass } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { FaHtml5 } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { BsMicrosoft } from 'react-icons/bs';

const Aboutme = () => {
  return (
    <>
      <div className='aboutme' id='aboutme'>
        <div className='container'>
          <h1 className='heading'>About Me</h1>
          <p className='para1'>
            Reginald Ejike is a passionate and goal driven frontend developer
            who can't rest until a task is solve, Whose interest is using tech
            ideas in bringing change to the world, where comfortability is
            brought to users
          </p>
          <ul>
            <li>
              <a href='http://github.com/pizzii' className='github'>
                <BsGithub size={'3rem'} />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/reginald-ejike-168143200/'
                className='linkedin'
              >
                <AiFillLinkedin size={'3rem'} />
              </a>
            </li>
            <li>
              <a href='https://twitter.com/reginald_ejike' className='twitter'>
                <AiFillTwitterSquare size={'3rem'} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='myskill'>
        <div className='container'>
          <h2>My SkillS</h2>
          <p>Here are a few skills I possess</p>
          <div className='myskill-content'>
            <div className='first-flex'>
              <div className='skill-item'>
                <div className='logo'>
                  <DiJavascript1 />
                </div>
                <p>JavaScript</p>
              </div>
              <div className='skill-item'>
                <div className='logo'>
                  <FaReact />
                </div>
                <p>ReactJs</p>
              </div>
              <div className='skill-item'>
                <div className='logo'>
                  <FaHtml5 />
                </div>
                <p>Html5</p>
              </div>
            </div>
            <div className='second-flex'>
              <div className='skill-item'>
                <div className='logo'>
                  <FaBootstrap />
                </div>
                <p>Bootstrap</p>
              </div>
              <div className='skill-item'>
                <div className='logo'>
                  <FaSass />
                </div>
                <p> Scss {'(Sass)'}</p>
              </div>
              <div className='skill-item'>
                <div className='logo'>
                  <BsMicrosoft />
                </div>
                <p> Microsoft Office </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
