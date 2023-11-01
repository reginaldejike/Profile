import { useState } from 'react';
import Aboutme from './Components/Aboutme';
import Contactme from './Components/Contactme';
import Header from './Components/Header';
import Project from './Components/Project';
import Services from './Components/Services';
import Skills from './Components/Skills';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Aboutme theme={theme} />
      <Skills theme={theme} />
      <Services theme={theme} />
      <Project theme={theme} />
      <Contactme theme={theme} />
    </>
  );
}

export default App;
