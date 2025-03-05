"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Nav from "./Nav/Nav";
import Lenguajes from "./Lenguajes";
import Proyectos from "./Proyectos";
import Intro from "./Intro";
import './i18n'; 
import { useTranslation } from 'react-i18next';
import Contact from "./Contact";

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
      <footer class="bg-transparent m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center justify-center">
                <ul class="flex flex-wrap text-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li className="flex items-center">
                        <a href="#" className="hover:underline me-4 md:me-6 cursor-pointer">{t('finalText')}</a>
                        <a href="https://www.linkedin.com/in/florencio-tom-4496a3198/" target="_blank" className="hover:underline hover:scale-110 transition-transform duration-300 ease-in-out me-4 md:me-6 cursor-pointer"><Image width={20} height={20} src="/linkedin.svg" alt="likdin de florencio"/></a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 {t('right')}</span>
        </div>
      </footer>
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