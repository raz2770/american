import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <>
    <div className='hero-container'>
      <video src='/videos/background.mp4' autoPlay loop muted />
      <h1>WELCOME TO</h1>
      <p>American Home Nurshing</p>
      <div className='hero-btns'>
       
        <p>For Free Trial Contact Num :- 8279814885</p>
      </div>
    </div>
    <div>
      
    </div>
    
    </>
  );
}

export default HeroSection;
