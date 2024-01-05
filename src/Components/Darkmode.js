import React from 'react';
import '../css/darkmde.css';
import { BsSun } from 'react-icons/bs';
import { BsMoon } from 'react-icons/bs';

const Darkmode = () => {
  const setDarkmode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark');
    localStorage.setItem('selectedTheme', 'dark');
  };

  const setLightmode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light');
    localStorage.setItem('selectedTheme', 'light');
  };

  const selectedTheme = localStorage.getItem('selectedTheme');

  if (selectedTheme === 'dark') {
    setDarkmode();
  }

  const tooggleTheme = (e) => {
    if (e.target.checked) setDarkmode();
    else setLightmode();
  };
  return (
    <div className='dark_mode'>
      <input
        type='checkbox'
        id='darkmode-toggle'
        className='input_dark'
        onChange={tooggleTheme}
        defaultChecked={selectedTheme === 'dark'}
      />
      <label for='darkmode-toggle' className='dark-mode-label'>
        <BsSun className='bs sun' />

        <BsMoon className='bs moon' />
      </label>
    </div>
  );
};

export default Darkmode;
