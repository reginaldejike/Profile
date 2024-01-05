import '../css/Header.css';
import me from '../assets/edited.png';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
// import { AiFillSquareXTwitter } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosClose } from 'react-icons/io';
import { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Button from './Button';
import Darkmode from './Darkmode';

function Header({ theme, setTheme }) {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <div className='showcase'>
          <nav className={scrolled ? 'scrolled' : ''}>
            <Link to='#' className='logo'>
              Reginald
            </Link>
            <ul
              className={!isMobile ? 'mainmenu' : 'mainmenu-mobile'}
              onClick={() => setIsMobile(false)}
            >
              <Link to='#aboutme' className='link-item'>
                About Me
              </Link>

              <Link to='#services' className='link-item'>
                Services
              </Link>

              <Link to='#project' className='link-item'>
                Projects
              </Link>

              <Link to='#contactme' className='link-item'>
                Contact Me
              </Link>
              <Darkmode />
            </ul>
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
          <div className='container'>
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
