"use client";

import { useState } from "react";
import Nav from "./Nav/Nav";
import Image from "next/image";
import './i18n'; 
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [shake, setShake] = useState(false);
  return (
    <>
      <Nav/>
      <section className="flex py-4 px-4 max-w-screen-xl mx-auto flex items-center px-4 mt-10">
        <div className="rounded-full border-2 border-blue-500 p-3"> {/* Aquí agregamos padding para la separación */}
          <motion.img src="/florencio.jpg" alt="Florencio" width={90} className="rounded-full object-cover shadow-lg" style={{ cursor: "pointer", height:'auto' }}
                animate={shake ? { x: [0, -5, 5, -5, 5, 0] } : {}} transition={{ duration: 0.3, repeat: 1 }} 
                onClick={() => { setShake(true); setTimeout(() => setShake(false), 300); }}/>
        </div>
        <div className="flex flex-col items-start justify-start text-left py-4">
          <h1 className="text-3xl font-semibold mb-3 ml-8">{t('title-intro')}</h1>
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
      </section>
    </>
  );
}
