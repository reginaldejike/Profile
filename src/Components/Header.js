import '../styles/Header.css';
import me from '../image/IMG_4466.jpeg';
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosClose } from 'react-icons/io';
import { useState } from 'react';

function Header() {
  const [closeMenu, setCloseMenu] = useState('closemenu');
  const [openMenu, setOpenMenu] = useState('openmenu');
  const [isclicked, setIsclicked] = useState(false);

  const show = () => {
    if (isclicked) {
      setOpenMenu(openMenu);
    } else {
      setCloseMenu(closeMenu);
    }
  };
  return (
    <>
      <header className='showcase'>
        <div className='container'>
          <nav>
            <h1 className='logo'>Reginald Ejike</h1>
            <div className='openmenu' onClick={show}>
              <RxHamburgerMenu />
            </div>
            <ul className='mainmenu'>
              <li>
                <a href=''> About Me </a>
              </li>
              <li>
                <a href=''> Services </a>
              </li>

              <li>
                <a href=''> Projects</a>
              </li>
              <li>
                <a href=''> Contact Me</a>
              </li>
              <div className='closemenu'>
                <IoIosClose />
              </div>
            </ul>
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
                  <a
                    href='https://twitter.com/reginald_ejike'
                    className='twitter'
                  >
                    <AiFillTwitterSquare size={'3rem'} />
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
