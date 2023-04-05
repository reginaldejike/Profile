import '../styles/Header.css';
import me from '../image/IMG_4466.jpg';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosClose } from 'react-icons/io';
import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <header className='showcase'>
        <div className='container'>
          <nav>
            <h1 className='logo'>Reginald Ejike</h1>

            <ul
              className={!isMobile ? 'mainmenu' : 'mainmenu-mobile'}
              onClick={() => setIsMobile(false)}
            >
              <Link to='#aboutme' className='link-item'>
                <li>About Me</li>
              </Link>

              <Link to='#services' className='link-item'>
                <li> Services</li>
              </Link>

              <Link to='#project' className='link-item'>
                <li>Projects</li>
              </Link>

              <Link to='#contactme' className='link-item'>
                <li>Contact Me</li>
              </Link>
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
          <div className='showcase-content'>
            <div>
              <h3> Hey there!</h3>
              <p>
                I am <span className='myname'> Reginald Ejike </span> a
                top-notch Frontend developer with a strong zeal to improve
                myself and grow in tech
              </p>
              <ul>
                <li>
                  <a href='http://github.com/pizzii' className='github icon'>
                    <BsGithub />
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
            </div>
            <img src={me} alt='Myself' />
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
