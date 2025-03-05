"use client";

import { useState } from "react";
import './i18n'; 
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

export default function Intro() {
  const { t, i18n } = useTranslation();
  const [shake, setShake] = useState(false);

  return (
    <>
      <section className="mt-20 flex flex-col md:justify-between sm:justify-center py-4 px-4 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm mx-auto">
        <div>
          <div className="flex items-center">
            <div className="rounded-full border-2 border-blue-500 p-2"> {/* Aquí agregamos padding para la separación */}
              <motion.img src="/florencio.jpg" alt="Florencio" width={90} className="rounded-full object-cover shadow-lg cursor-pointer" style={{ height:'auto' }}
                    animate={shake ? { x: [0, -5, 5, -5, 5, 0] } : {}} transition={{ duration: 0.3, repeat: 1 }} 
                    onClick={() => { setShake(true); setTimeout(() => setShake(false), 300); }}/>
            </div>
            <div className="flex flex-col items-start justify-start text-left py-4">
              <h1 className="dark:text-white text-black text-3xl font-semibold mb-3 ml-8">{t('title-intro')}</h1>
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
              <a href="mailto:florenciotom@hotmail.com">
                  <button type="button" className='mt-10 flex max-w-sm bg-gradient-to-r from-green-500 to-blue-500 focus:outline-none text-white text-base uppercase font-bold shadow-md rounded-full p-3 transition-all duration-300 hover:scale-110'>
                      <div className="flex sm:flex-cols-12 gap-2 items-center">
                          <div className="col-span-1">
                              <i className="fa-solid fa-envelope"></i>
                          </div>
                          <div className="col-span-2">{t('mailme')}</div>
                      </div>    
                  </button>
                </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
