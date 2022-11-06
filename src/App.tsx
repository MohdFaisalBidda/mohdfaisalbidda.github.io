import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Projects from './Components/Projects';
import Home from './Components/Home';
import SocialLinks from './Components/SocialLinks';

function App() {
  const [theme,setTheme]=useState("");

  useEffect(()=>{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme("dark");
    }
    else{
        setTheme("light");
      }
    
  },[])

  useEffect(()=>{
    if (theme === 'dark') {
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");

    }
    
  },[theme])
  
  const handleTheme =()=>{
    setTheme(theme === "dark" ? "light" : "dark");
  }
  
  return (
    <>
      
        <NavBar themes={handleTheme}/>
        <SocialLinks/>
        <Home/>
        <About/>
        <Projects/>
    </>
  );
}

export default App;
