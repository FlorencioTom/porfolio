"use client";

import { useState } from "react";
import Image from "next/image";
import './i18n'; 
import { useTranslation } from 'react-i18next';

export default function Lenguajes() {
  const { t, i18n } = useTranslation();
  const [shake, setShake] = useState(false);

  return (
    <>
      <section id="skills" className="mt-1 flex flex-col md:justify-between sm:justify-center py-4 px-4 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm mx-auto">
        <div>
            <h1 className="flex items-center mb-5 text-3xl font-semibold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-4xl dark:text-white gap-3 mt-10 justify-center md:justify-start">
                <i className="fa-solid fa-code text-gray-500"></i> 
                {t('codingSkills.text')}
                <span className="underline underline-offset-3 decoration-3 decoration-cyan-700 dark:decoration-yellow-600">
                    {t('codingSkills.underline')}
                </span>
            </h1>
            <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-4 p-5 pl-0">
            <div className="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
                <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110"  src={"/react.svg"} width={50} height={50}  alt="react" style={{height:'100px'}} />
                <div className="px-6 py-2 pb-0 flex gap-2 items-center">
                <i className="fa-solid fa-star text-yellow-500"></i>
                <div className="font-bold text-black text-xl dark:text-white">React</div>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
                <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110"  src={"/angular.svg"} width={50} height={50}  alt="angular" style={{height:'100px'}} />
                <div className="px-6 py-2 pb-0 flex gap-2 items-center">
                <i className="fa-solid fa-star text-yellow-500"></i>
                <div className="font-bold text-black text-xl dark:text-white">Angular</div>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
                <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110"  src={"/javascript.svg"} width={50} height={50}  alt="javascript" style={{height:'100px'}} />
                <div className="px-6 py-2 pb-0 flex gap-2 items-center">
                <i className="fa-solid fa-star text-yellow-500"></i>
                <div className="font-bold  text-black  text-xl dark:text-white">Javascript</div>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
                <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110"  src={"/css.svg"} width={50} height={50}  alt="css" style={{height:'100px'}} />
                <div className="px-6 py-2 pb-0 flex gap-2 items-center">
                <i className="fa-solid fa-star text-yellow-500"></i>
                <div className="font-bold text-black text-xl dark:text-white">CSS</div>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
                <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110"  src={"/html5.svg"} width={50} height={50}  alt="html5" style={{height:'100px'}} />
                <div className="px-6 py-2 pb-0 flex gap-2 items-center">
                <i className="fa-solid fa-star text-yellow-500"></i>
                <div className="font-bold text-black text-xl dark:text-white">HTML5</div>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
                <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110"  src={"/git.svg"} width={50} height={50}  alt="git" style={{height:'100px'}} />
                <div className="px-6 py-2 pb-0 flex gap-2 items-center">
                <i className="fa-solid fa-star text-yellow-500"></i>
                <div className="font-bold text-black text-xl dark:text-white">GIT</div>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
                <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110"  src={"/sass.svg"} width={50} height={50}  alt="sass" style={{height:'100px'}} />
                <div className="px-6 py-2 pb-0">
                <div className="font-bold text-black text-xl dark:text-white">SASS</div>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
                <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110"  src={"/tailwindcss.svg"} width={50} height={50}  alt="tailwind css" style={{height:'100px'}} />
                <div className="px-6 py-2 pb-0">
                <div className="font-bold text-black text-xl dark:text-white">Tailwind CSS</div>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
                <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110"  src={"/wordpress.svg"} width={50} height={50}  alt="wordpress" style={{height:'100px'}} />
                <div className="px-6 py-2 pb-0">
                <div className="font-bold text-black text-xl dark:text-white">Wordpress</div>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
                <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110"  src={"/mysql.svg"} width={50} height={50}  alt="sql" style={{height:'100px'}} />
                <div className="px-6 py-2 pb-0">
                <div className="font-bold text-black text-xl dark:text-white">SQL</div>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
                <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110 phpcolor" src={"/Php_dark.svg"} width={50} height={50} alt="php" style={{height:'100px', width:'100px'}} />
                <div className="px-6 py-2 pb-0">
                <div className="font-bold text-black text-xl dark:text-white">PHP</div>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
                <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110 "  src={"/nodejs.svg"} width={50} height={50}  alt="nodejs" style={{height:'100px'}} />
                <div className="px-6 py-2 pb-0">
                <div className="font-bold text-black text-xl dark:text-white">Node JS</div>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
                <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110"  src={"/mongodb.svg"} width={50} height={50}  alt="mongo" style={{height:'100px'}} />
                <div className="px-6 py-2 pb-0">
                <div className="font-bold text-black text-xl dark:text-white">MONGO</div>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden hover:shadow-lg hover:bg-gray-200 px-0 py-2 flex flex-col items-center justify-start dark:bg-transparent transition-all duration-300 ease-in-out cursor-pointer">
                <Image className="w-full transition-transform duration-200 ease-in-out dark:hover:scale-110"  src={"/java.svg"} width={50} height={50}  alt="java" style={{height:'100px'}} />
                <div className="px-6 py-2 pb-0">
                <div className="font-bold text-black text-xl dark:text-white">Java</div>
                </div>
            </div>
            </div>
        </div>
      </section>
    </>
  );
}