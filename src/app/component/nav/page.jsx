"use client"
import React, { useState } from 'react';
import Image from 'next/image';

import behance from "./images/beha.svg";
import linkedin from "./images/linke.svg";

const Nav = ({ click }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='w-full h-[80px] flex justify-center items-center z-50 relative   '>
      {/* Original Desktop Navigation */}
      <div className='w-[33%] h-[80px] flex justify-center items-center gap-5 z-50 max-[900px]:hidden'>
        <a className='w-auto h-max' href="https://www.behance.net/adamwaell" target="_blank">
          <Image src={behance} alt='Behance icon' priority width={30} height={30} />
        </a>
        <a className='w-auto h-max' href="https://www.linkedin.com/in/adam-wael-/" target="_blank">
          <Image src={linkedin} alt='LinkedIn icon' priority width={30} height={30} />
        </a>
      </div>

      <div className='w-[38%] h-[80px] z-50 text-white text-[20px] font-semibold gap-5 flex justify-center items-center max-[900px]:hidden'>
        <a href="#port">Portfolio</a>
        <a href="#aboutme">About Me</a>
        <button onClick={click} className='cursor-pointer px-4 py-2 rounded-md'>Contact</button>
      </div>

      <div className='w-[33%] h-[80px] max-[900px]:hidden'></div>

      {/* Mobile Navigation */}
      <div className='hidden max-[900px]:flex w-full justify-between px-4 absolute top-0'>
        {/* Social Icons - Mobile */}
        <div className='flex gap-5 z-50 items-center h-[80px]'>
          <a href="https://www.behance.net/adamwaell" target="_blank">
            <Image src={behance} alt='Behance' width={30} height={30} />
          </a>
          <a href="https://www.linkedin.com/in/adam-wael-/" target="_blank">
            <Image src={linkedin} alt='LinkedIn' width={30} height={30} />
          </a>
        </div>

        {/* Hamburger Menu */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='z-50 h-[80px] flex items-center'
        >
          <div className='space-y-2'>
            <span className={`block w-8 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-white ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed top-0 left-0 w-full h-max pt-[130px] pb-[20px] bg-[#1a1a1a] text-white transition-all duration-300 z-40 flex flex-col items-center justify-center gap-8 text-2xl
        ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>

        <a href="#port" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
        <a href="#aboutme" onClick={() => setIsMenuOpen(false)}>About Me</a>
        <button 
          onClick={() => {
            click();
            setIsMenuOpen(false);
          }} 
          className='px-6 py-3 rounded-md'
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Nav;