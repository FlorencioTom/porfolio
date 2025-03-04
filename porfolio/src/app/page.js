"use client";

import { useState, useEffect } from "react";
import Nav from "./Nav/Nav";
import Lenguajes from "./Lenguajes";
import Proyectos from "./Proyectos";
import Intro from "./Intro";
import './i18n'; 
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation();
  const [goUp, setGoUp] = useState(false);

  useEffect(() => {
    
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Función para hacer scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Nav />
      <Intro />
      <Lenguajes />
      <Proyectos />
      
      <div className={`fixed bottom-10 right-10 z-[9999] transition-all duration-300 ease-in-out ${goUp ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}`}>
        <div className="bg-cyan-200 dark:bg-yellow-200 text-white dark:text-black p-4 w-14 h-14 rounded-full shadow-lg transition-colors flex items-center justify-center">
        <button
          onClick={scrollToTop}
          className="transition-transform duration-200 transform bg-cyan-500 dark:bg-yellow-500 hover:scale-110 text-white dark:text-black p-4 w-10 h-10 rounded-full shadow-lg transition-colors flex items-center justify-center"
          aria-label="Go to top"
        >
          <i className="fa-solid fa-arrow-up text-xl"></i>
        </button>
        </div>
      </div>
    </>
  );
}