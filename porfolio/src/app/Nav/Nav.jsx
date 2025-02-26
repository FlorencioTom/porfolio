"use client"; 
import Link from "next/link";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const theme = {
    root: {
      base: 'bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4',
      rounded: {
        on: 'rounded',
        off: ''
      },
      bordered: {
        on: 'border',
        off: ''
      },
      inner: {
        base: 'mx-auto flex flex-wrap items-center justify-between',
        fluid: {
          on: '',
          off: 'container'
        }
      }
    },
    brand: {
      base: 'flex items-center'
    },
    collapse: {
      base: 'w-full md:block md:w-auto',
      list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium',
      hidden: {
        on: 'hidden',
        off: ''
      }
    },
    link: {
      base: 'block py-2 pl-3 pr-4 md:p-0',
      active: {
        on: 'bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700',
        off: 'border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white'
      },
      disabled: {
        on: 'text-gray-400 hover:cursor-not-allowed dark:text-gray-600',
        off: ''
      }
    },
    toggle: {
      base: 'inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden',
      icon: 'h-6 w-6 shrink-0'
    }
  };

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
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} href="#">
            About
          </Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
        // <div className="w-full bg-transparent py-10">
        //     <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm mx-auto flex items-center justify-between px-4">
        //         <div className="flex items-center space-x-6 dark:text-white">
        //             <i className="fas fa-code text-xl" /> {/* Ícono de código */}
        //             <ul className="flex space-x-8">
        //                 <li className="cursor-pointer text-gray-800 dark:text-white 
        //                             hover:text-blue-500 dark:hover:text-yellow-500 
        //                             transition-colors duration-300">
        //                 {t('home')}
        //                 </li>
        //                 <li className="cursor-pointer text-gray-800 dark:text-white 
        //                             hover:text-blue-500 dark:hover:text-yellow-500 
        //                             transition-colors duration-300">
        //                 {t('about')}
        //                 </li>
        //                 <li className="cursor-pointer text-gray-800 dark:text-white 
        //                             hover:text-blue-500 dark:hover:text-yellow-500 
        //                             transition-colors duration-300">
        //                 {t('projects')}
        //                 </li>
        //                 <li className="cursor-pointer text-gray-800 dark:text-white 
        //                             hover:text-blue-500 dark:hover:text-yellow-500 
        //                             transition-colors duration-300">
        //                 {t('contact')}
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="flex space-x-8">
        //             <Image 
        //                 className="dark:text-white"
        //                 src={flag === 0 ? "/es.svg" : "/gb.svg"} 
        //                 alt="Flag" 
        //                 width={30} 
        //                 height={20} 
        //                 onClick={toggleLanguage} 
        //                 style={{ cursor: "pointer" }}
        //             />
        //             <i className={`fa-regular ${darkMode ? "fa-sun" : "fa-moon"} text-xl text-gray-800 dark:text-white`}
        //                 onClick={toggleColorMode}
        //                 style={{cursor: "pointer"}}>
        //             </i>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Nav;