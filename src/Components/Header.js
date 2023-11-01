import '../css/Header.css';
import me from '../assets/edited.png';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosClose } from 'react-icons/io';
import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Button from './Button';

function Header({ theme, setTheme }) {
  const [isMobile, setIsMobile] = useState(false);
  // const [isDark, setIsDark] = useState(false);

  return (
    <>
      <header className={theme === 'light' ? 'light' : 'dark'}>
        <div className='showcase'>
          <div className='container'>
            <nav>
              <Link to='#' className={theme === 'light' ? 'logo' : 'darkmode'}>
                Reginald
              </Link>
              <ul
                className={!isMobile ? 'mainmenu' : 'mainmenu-mobile'}
                onClick={() => setIsMobile(false)}
              >
                <Link
                  to='#aboutme'
                  className={theme === 'light' ? 'link-item' : 'link-item-dark'}
                >
                  About Me
                </Link>

                <Link
                  to='#services'
                  className={theme === 'light' ? 'link-item' : 'link-item-dark'}
                >
                  Services
                </Link>

                <Link
                  to='#project'
                  className={theme === 'light' ? 'link-item' : 'link-item-dark'}
                >
                  Projects
                </Link>

                <Link
                  to='#contactme'
                  className={theme === 'light' ? 'link-item' : 'link-item-dark'}
                >
                  Contact Me
                </Link>

                {/* <input type='checkbox' id='dark_mode' /> */}

                <select
                  className='theme'
                  value={theme}
                  onChange={(event) => {
                    setTheme(event.target.value);
                  }}
                >
                  <option value='light'>Light</option>
                  <option value='dark'>Dark</option>
                </select>
              </ul>
              {/* <div>
                <input type='checkbox' id='darkmode-toggle' />
                <label for='darkmode_toggle'>
                  <BsSun />
                  <BsMoon />
                </label>
              </div> */}
              <button
                className='mobile-view-icon'
                onClick={() => setIsMobile(!isMobile)}
              >
                {isMobile ? (
                  <>
                    <div className='openmenu'>
                      <IoIosClose />
                    </div>
                  </>
                ) : (
                  <>
                    <div className='closemenu'>
                      <RxHamburgerMenu />
                    </div>
                  </>
                )}
              </button>
            </nav>
            <div className='showcase-content'>
              <div className='intro'>
                <h3> Hey there!</h3>
                <p>
                  I am <span className='myname'> Reginald Ejike </span> a
                  top-notch Frontend developer with a strong zeal to improve
                  myself and grow in tech
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
                <Button text={'Hire Me'} textColor={'#fff'} color={'#1c41b0'} />
              </div>
              <img src={me} alt='Myself' className='myself' />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
