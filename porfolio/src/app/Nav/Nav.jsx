"use client"; 

import { Navbar } from "flowbite-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import {theme} from './navTheme';

const Nav = () => {

    const { t, i18n } = useTranslation();
    const [flag, setFlag] = useState(0);
    const [darkMode, setDarkMode] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [miRoute, setMiRoute] = useState('');

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          console.log(window.scrollY);
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Limpiar el evento al desmontar el componente
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const toggleLanguage = () => {
        i18n.changeLanguage(flag === 0 ? 'es' : 'en');
        setFlag(flag === 0 ? 1 : 0);
    };

    const toggleColorMode = () => {
      if (darkMode) {
        // Si está en modo oscuro (dark), lo cambiamos a modo claro.
        document.documentElement.classList.remove("dark");
        document.documentElement.style.setProperty('--background', 'white');  // Establecer el fondo a blanco
        document.documentElement.style.setProperty('--foreground', 'black');  // Establecer el texto a negro
        localStorage.setItem("theme", "light");
      } else {
        // Si está en modo claro (light), lo cambiamos a modo oscuro.
        document.documentElement.classList.add("dark");
        document.documentElement.style.setProperty('--background', 'black');  // Establecer el fondo a negro
        document.documentElement.style.setProperty('--foreground', 'white');  // Establecer el texto a blanco
        localStorage.setItem("theme", "dark");
      }
      // Actualizar el estado de darkMode
      setDarkMode(!darkMode);
    };

    const activeLink = (page) => {
      if (page === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setMiRoute(page);
    };

    return (
      <Navbar fluid rounded  className={`backdrop-blur transition-all duration-300 ease-in-out ${theme.root.base} ${isSticky ? ' ' : ''}`}>
        <Navbar.Brand>
          <Image 
            className="mr-5 dark:text-white transition-transform duration-200 transform hover:scale-110"
            src={flag === 0 ? "/es.svg" : "/gb.svg"} 
            alt="Flag" 
            width={30} 
            height={20} 
            onClick={toggleLanguage} 
            style={{ cursor: "pointer" }}
          />
          <i 
            className={`transition-transform duration-200 transform hover:scale-110 fa-regular ${darkMode ? "fa-sun" : "fa-moon"} text-xl text-gray-800 dark:text-white`} 
            onClick={toggleColorMode} 
            style={{ cursor: "pointer" }}
          ></i>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link active={miRoute === 'home'} onClick={() => activeLink('home')} className={theme.link.base}>{t('home')}</Navbar.Link>
          <Navbar.Link href="#skills" active={miRoute === 'skills'} onClick={() => activeLink('skills')} className={theme.link.base}>{t('skills')}</Navbar.Link>
          <Navbar.Link href="#projects" active={miRoute === 'projects'} onClick={() => activeLink('projects')} className={theme.link.base}>{t('projects')}</Navbar.Link>
          <Navbar.Link href="#about" active={miRoute === 'about'} onClick={() => activeLink('about')} className={theme.link.base}>{t('about')}</Navbar.Link>
          <Navbar.Link href="#contact" active={miRoute === 'contact'} onClick={() => activeLink('contact')} className={theme.link.base}>{t('contact')}</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Nav;