import React from 'react';
import '../css/About.css';
import { FaSass } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { FaHtml5 } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { BsMicrosoft } from 'react-icons/bs';

const Skills = ({ theme }) => {
  return (
    <>
      <div className={theme === 'light' ? 'light' : 'dark'}>
        <div className='myskill'>
          <div className='container'>
            <h2>My SkillS</h2>
            <p
              className={
                theme === 'light' ? 'skill-subheading' : 'skill-darkmode'
              }
            >
              Here are a few skills I possess
            </p>
            <div className='myskill-content'>
              <div className='first-flex'>
                <div className='skill-item'>
                  <div className='logo'>
                    <DiJavascript1 />
                  </div>
                  <p
                    className={
                      theme === 'light' ? 'icon-header' : 'icon-header-darkmode'
                    }
                  >
                    JavaScript
                  </p>
                </div>
                <div className='skill-item'>
                  <div className='logo'>
                    <FaReact />
                  </div>
                  <p
                    className={
                      theme === 'light' ? 'icon-header' : 'icon-header-darkmode'
                    }
                  >
                    ReactJs
                  </p>
                </div>
                <div className='skill-item'>
                  <div className='logo'>
                    <FaHtml5 />
                  </div>
                  <p
                    className={
                      theme === 'light' ? 'icon-header' : 'icon-header-darkmode'
                    }
                  >
                    Html5
                  </p>
                </div>
              </div>
              <div className='second-flex'>
                <div className='skill-item'>
                  <div className='logo'>
                    <FaBootstrap />
                  </div>
                  <p
                    className={
                      theme === 'light' ? 'icon-header' : 'icon-header-darkmode'
                    }
                  >
                    Bootstrap
                  </p>
                </div>
                <div className='skill-item'>
                  <div className='logo'>
                    <FaSass />
                  </div>
                  <p
                    className={
                      theme === 'light' ? 'icon-header' : 'icon-header-darkmode'
                    }
                  >
                    Scss {'(Sass)'}
                  </p>
                </div>
                <div className='skill-item'>
                  <div className='logo'>
                    <BsMicrosoft />
                  </div>
                  <p
                    className={
                      theme === 'light' ? 'icon-header' : 'icon-header-darkmode'
                    }
                  >
                    Microsoft Office
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
