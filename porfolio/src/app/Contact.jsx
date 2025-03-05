"use client";

import { useState } from "react";
import './i18n'; 
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const [shake, setShake] = useState(false);

  return (
    <>
      <section id="contact" className="mt-5 flex flex-col md:justify-between sm:justify-center py-4 px-4 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm mx-auto">
        <div>
            <h1 class="flex items-center mb-5 text-3xl font-semibold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-4xl dark:text-white gap-3 mt-10 justify-center md:justify-start ">
                <i class="fa-solid fa-envelope text-rose-900 dark:text-white"></i>
                <span class="underline underline-offset-3 decoration-3 decoration-cyan-700 dark:decoration-yellow-600">
                  {t('contact')}
                </span>
            </h1>
        </div>
      </section>
    </>
  );
}