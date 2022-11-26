import React, { createContext,useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Projects from './Components/Projects';
import Home from './Components/Home';
import SocialLinks from './Components/SocialLinks';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  const [theme, setTheme] = useState("");

  const ThemeContext: any = createContext("");


  const handleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  }

  return (

    <ThemeContext.Provider value={{ theme, handleTheme }}>
      <div className={theme} id={theme}>
        <NavBar handleTheme={handleTheme} theme={theme}/>
        <ScrollToTop/>
        <SocialLinks />
        <Home />
        <About />
        <Projects />
        <Experience/>
        <Contact/>
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
