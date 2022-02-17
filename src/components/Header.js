import React from 'react';
import meme from '../images/meme.png';
import '../App.css';

const Header = () => {
  return (
  <header className="header">
   <img src={meme} alt="logo" className="header--image"/>
   <h2 className="header--title">meme generator</h2>
   <h4 className="header--project">React course - project 3 </h4> 
  

   </header>

  )};

export default Header;
