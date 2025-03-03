"use client";

import { useState } from "react";
import Nav from "./Nav/Nav";
import Image from "next/image";
import './i18n'; 
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { Button } from "flowbite-react";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [shake, setShake] = useState(false);

  return (
    <>
      <Nav/>
      <section className="mt-20 flex flex-col md:justify-between sm:justify-center py-4 px-4 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm mx-auto">
        <div>
          <div className="flex items-center">
            <div className="rounded-full border-2 border-blue-500 p-2"> {/* Aquí agregamos padding para la separación */}
              <motion.img src="/florencio.jpg" alt="Florencio" width={90} className="rounded-full object-cover shadow-lg cursor-pointer" style={{ height:'auto' }}
                    animate={shake ? { x: [0, -5, 5, -5, 5, 0] } : {}} transition={{ duration: 0.3, repeat: 1 }} 
                    onClick={() => { setShake(true); setTimeout(() => setShake(false), 300); }}/>
            </div>
            <div className="flex flex-col items-start justify-start text-left py-4">
              <h1 className="dark:text-white text-3xl font-semibold mb-3 ml-8">{t('title-intro')}</h1>
              <a href="https://www.linkedin.com/in/florencio-tom-4496a3198/" target="_blank" rel="noopener" 
                className="flex items-center justify-start transition transform hover:scale-105 ml-8"> 
                <div className="flex items-center"> 
                  <span className="relative inline-flex overflow-hidden rounded-full p-[1px]"> 
                    <span className="overflow-hidden absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
                                    bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]">
                    </span> 
                    <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 
                                    bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 
                                    backdrop-blur-3xl whitespace-nowrap">
                      {t('availability')}
                    </div> 
                  </span>
                </div> 
              </a>
            </div>
          </div>
          <div className="mt-10 max-w-lg px-4">
            <p className="text-black  dark:text-white leading-relaxed text-xl">
              {t('title-intro')}, <strong className="text-cyan-700 dark:text-yellow-500"> {t('profesion')} </strong> {t('description-intro')}
            </p>
            <div className="flex  justify-center">
            <button type="button" className='mt-10 flex max-w-sm bg-gradient-to-r from-green-500 to-blue-500 focus:outline-none text-white text-base uppercase font-bold shadow-md rounded-full p-3 transition-all duration-300 hover:scale-110'>
                <div class="flex sm:flex-cols-12 gap-2 items-center">
                    <div class="col-span-1">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div class="col-span-2">{t('mailme')}</div>
                </div>    
            </button>
            </div>
          </div>
        </div>
        <div>
        <h1 class="flex mb-5 text-3xl font-semibold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white gap-3 mt-10">
          <i class="fa-solid fa-code "></i> 
          {t('codingSkills.text')}
          <span class="underline underline-offset-3 decoration-8 decoration-cyan-700 dark:decoration-yellow-600">
            {t('codingSkills.underline')}
          </span>
        </h1>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-4 p-5 pl-0">
          <div class="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
            <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110"  src={"/react.svg"} width={50} height={50}  alt="react" style={{height:'100px'}} />
            <div class="px-6 py-2 pb-0 flex gap-2 items-center">
              <i class="fa-solid fa-star text-yellow-500"></i>
              <div className="font-bold text-xl dark:text-white">React</div>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
            <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110"  src={"/angular.svg"} width={50} height={50}  alt="angular" style={{height:'100px'}} />
            <div class="px-6 py-2 pb-0 flex gap-2 items-center">
              <i class="fa-solid fa-star text-yellow-500"></i>
              <div className="font-bold text-xl dark:text-white">Angular</div>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
            <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110"  src={"/javascript.svg"} width={50} height={50}  alt="javascript" style={{height:'100px'}} />
            <div class="px-6 py-2 pb-0 flex gap-2 items-center">
              <i class="fa-solid fa-star text-yellow-500"></i>
              <div className="font-bold text-xl dark:text-white">Javascript</div>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
            <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110"  src={"/css.svg"} width={50} height={50}  alt="css" style={{height:'100px'}} />
            <div class="px-6 py-2 pb-0 flex gap-2 items-center">
              <i class="fa-solid fa-star text-yellow-500"></i>
              <div className="font-bold text-xl dark:text-white">CSS</div>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
            <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110"  src={"/html5.svg"} width={50} height={50}  alt="html5" style={{height:'100px'}} />
            <div class="px-6 py-2 pb-0 flex gap-2 items-center">
              <i class="fa-solid fa-star text-yellow-500"></i>
              <div className="font-bold text-xl dark:text-white">HTML5</div>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
            <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110"  src={"/git.svg"} width={50} height={50}  alt="git" style={{height:'100px'}} />
            <div class="px-6 py-2 pb-0 flex gap-2 items-center">
              <i class="fa-solid fa-star text-yellow-500"></i>
              <div className="font-bold text-xl dark:text-white">GIT</div>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
            <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110"  src={"/sass.svg"} width={50} height={50}  alt="sass" style={{height:'100px'}} />
            <div class="px-6 py-2 pb-0">
              <div className="font-bold text-xl dark:text-white">SASS</div>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
            <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110"  src={"/tailwindcss.svg"} width={50} height={50}  alt="tailwind css" style={{height:'100px'}} />
            <div class="px-6 py-2 pb-0">
              <div className="font-bold text-xl dark:text-white">Tailwind CSS</div>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
            <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110"  src={"/wordpress.svg"} width={50} height={50}  alt="wordpress" style={{height:'100px'}} />
            <div class="px-6 py-2 pb-0">
              <div className="font-bold text-xl dark:text-white">Wordpress</div>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
            <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110"  src={"/mysql.svg"} width={50} height={50}  alt="sql" style={{height:'100px'}} />
            <div class="px-6 py-2 pb-0">
              <div className="font-bold text-xl dark:text-white">SQL</div>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
            <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110 phpcolor" src={"/Php_dark.svg"} width={50} height={50} alt="php" style={{height:'100px', width:'100px'}} />
            <div class="px-6 py-2 pb-0">
              <div className="font-bold text-xl dark:text-white">PHP</div>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
            <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110 "  src={"/nodejs.svg"} width={50} height={50}  alt="nodejs" style={{height:'100px'}} />
            <div class="px-6 py-2 pb-0">
              <div className="font-bold text-xl dark:text-white">Node JS</div>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
            <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110"  src={"/mongodb.svg"} width={50} height={50}  alt="mongo" style={{height:'100px'}} />
            <div class="px-6 py-2 pb-0">
              <div className="font-bold text-xl dark:text-white">MONGO</div>
            </div>
          </div>
          <div class="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
            <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110"  src={"/java.svg"} width={50} height={50}  alt="java" style={{height:'100px'}} />
            <div class="px-6 py-2 pb-0">
              <div className="font-bold text-xl dark:text-white">Java</div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
