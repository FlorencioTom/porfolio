"use client"; 
import Link from "next/link";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import {theme} from './navTheme'

const Nav = () => {

    const { t, i18n } = useTranslation();
    const [flag, setFlag] = useState(0);
    const [darkMode, setDarkMode] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMD, setIsMD] = useState(false);

    const toggleLanguage = () => {
        i18n.changeLanguage(flag === 0 ? 'es' : 'en');
        setFlag(flag === 0 ? 1 : 0);
    };

    const toggleColorMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        setDarkMode(!darkMode);
    };

    return (
      <Navbar fluid rounded className={theme.root.base}>
        <Navbar.Brand>
          <Image 
            className="mr-5 dark:text-white"
            src={flag === 0 ? "/es.svg" : "/gb.svg"} 
            alt="Flag" 
            width={30} 
            height={20} 
            onClick={toggleLanguage} 
            style={{ cursor: "pointer" }}
          />
          <i 
            className={`fa-regular ${darkMode ? "fa-sun" : "fa-moon"} text-xl text-gray-800 dark:text-white`} 
            onClick={toggleColorMode} 
            style={{ cursor: "pointer" }}
          ></i>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" className={theme.link.base}>{t('home')}</Navbar.Link>
          <Navbar.Link href="#" className={theme.link.base}>{t('about')}</Navbar.Link>
          <Navbar.Link href="#" className={theme.link.base}>{t('projects')}</Navbar.Link>
          <Navbar.Link href="#" className={theme.link.base}>{t('contact')}</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default Nav;