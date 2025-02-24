
"use client"; 

import Image from "next/image";
import { useState } from "react";
import '../i18n'; 
import { useTranslation } from 'react-i18next';

const Nav = () => {

    const { t, i18n } = useTranslation();
    const [flag, setFlag] = useState(0);
    const [color, setColor] = useState(0);

    const toggleLanguage = () => {
        i18n.changeLanguage(flag === 0 ? 'es' : 'en');
        setFlag(flag === 0 ? 1 : 0);
    };

    const toggleColorMode = () => {
        setColor(color === 0 ? 1 : 0);
    };

    return (
        <div className="w-full bg-gray-100 py-4">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
                <div className="flex items-center space-x-6">
                    <i className="fas fa-code text-xl" /> {/* Ícono de código */}
                    <ul className="flex space-x-8">
                        <li className="cursor-pointer hover:text-blue-500 transition-colors duration-300">{t('home')}</li>
                        <li className="cursor-pointer hover:text-blue-500 transition-colors duration-300">{t('about')}</li>
                        <li className="cursor-pointer hover:text-blue-500 transition-colors duration-300">{t('projects')}</li>
                        <li className="cursor-pointer hover:text-blue-500 transition-colors duration-300">{t('contact')}</li>
                    </ul>
                </div>
                <div className="flex  space-x-8">
                    <Image 
                        src={flag === 0 ? "/es.svg" : "/gb.svg"} 
                        alt="Flag" 
                        width={30} 
                        height={20} 
                        onClick={toggleLanguage} 
                        style={{ cursor: "pointer" }}
                    />
                    <i className={color === 0 ? "fa-regular fa-moon text-xl" : "fa-regular fa-sun text-xl"}
                        onClick={toggleColorMode}
                        style={{cursor: "pointer"}}>
                    </i>
                </div>
            </div>
            {/* <a href="https://linkedin.com/in/midudev" target="_blank" rel="noopener" class="flex items-center transition md:justify-center md:hover:scale-105"> 
                <div class="flex items-center "> 
                    <span class="relative inline-flex overflow-hidden rounded-full p-[1px]"> 
                        <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span> 
                            <div class="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
                                Disponible para trabajar 
                            </div> 
                        </span> 
                </div> 
            </a> */}
        </div>
    );
}

export default Nav;