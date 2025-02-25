
"use client"; 

import Image from "next/image";
import { useState } from "react";
import '../i18n'; 
import { useTranslation } from 'react-i18next';

const Nav = () => {

    const { t, i18n } = useTranslation();
    const [flag, setFlag] = useState(0);
    const [darkMode, setDarkMode] = useState(false);

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
        <div className="w-full bg-gray-100 py-4 dark:bg-neutral-900">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
                <div className="flex items-center space-x-6 dark:text-white">
                    <i className="fas fa-code text-xl" /> {/* Ícono de código */}
                    <ul className="flex space-x-8">
                    <li className="cursor-pointer text-gray-800 dark:text-white hover:text-blue-500 transition-colors duration-300">
                    {t('home')}
                    </li>
                    <li className="cursor-pointer text-gray-800 dark:text-white hover:text-blue-500 transition-colors duration-300">
                    {t('about')}
                    </li>
                    <li className="cursor-pointer text-gray-800 dark:text-white hover:text-blue-500 transition-colors duration-300">
                    {t('projects')}
                    </li>
                    <li className="cursor-pointer text-gray-800 dark:text-white hover:text-blue-500 transition-colors duration-300">
                    {t('contact')}
                    </li>
                    </ul>
                </div>
                <div className="flex  space-x-8">
                    <Image 
                        className="dark:text-white"
                        src={flag === 0 ? "/es.svg" : "/gb.svg"} 
                        alt="Flag" 
                        width={30} 
                        height={20} 
                        onClick={toggleLanguage} 
                        style={{ cursor: "pointer" }}
                    />
                    <i className={`fa-regular ${darkMode ? "fa-sun" : "fa-moon"} text-xl text-gray-800 dark:text-white`}
                        onClick={toggleColorMode}
                        style={{cursor: "pointer"}}>
                    </i>
                </div>
            </div>
        </div>
    );
}

export default Nav;