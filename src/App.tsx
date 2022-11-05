import React from 'react';
import './App.css';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import Image from './Components/Image';
import Card from './Components/Card';
import NavBar from './Components/NavBar';
// import About from './Components/About';
import Projects from './Components/Projects';
import Home from './Components/Home';

function App() {
  return (
    <>
      
        <NavBar />
        <Home/>
        {/* <About/> */}
        <Projects/>
        
    </>
  );
}

export default App;
