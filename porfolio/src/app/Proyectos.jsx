"use client";

import { useState } from "react";
import Image from "next/image";
import './i18n'; 
import { useTranslation } from 'react-i18next';
import {jsonProjects} from './projects.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Proyectos() {
  const { t, i18n } = useTranslation();
  const [shake, setShake] = useState(false);

  return (
    <>
      <section id="projects" className="flex flex-col md:justify-between sm:justify-center py-4 px-4 xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm mx-auto">
        <h1 class="flex items-center mb-10 text-3xl font-semibold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-4xl dark:text-white gap-3 justify-center md:justify-start">
            <i className="fa-solid fa-star text-yellow-500"></i>
            {t('pprojects.text')}
            <span className="underline underline-offset-3 decoration-3 decoration-cyan-700 dark:decoration-yellow-600">
              {t('pprojects.underline')}
            </span>
          </h1>
          <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {jsonProjects.map((project, index) => (
          <div key={index} className="bg-gray-200 dark:bg-gray-800 rounded-lg  transition-all duration-300 ease-in-out cursor-pointer">
            <div className="relative w-full h-40">
              {/* Swiper para imágenes */}
              <Swiper
                pagination={true}
                modules={[Pagination]}
                className="w-full h-full"
                loop={true}
              >
                {project.images &&
                  project.images.map((image, imageIndex) => (
                    <SwiperSlide key={imageIndex} className="relative w-full h-40">
                      <Image
                        src={image}
                        alt={`Imagen ${imageIndex} de ${project.title}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
            <div className="p-4 gap-2">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    {i18n.language === 'es' ? project.description : project.descriptionEn}
                </p>
                <span className="text-sm text-green-600 dark:text-green-400 font-medium">{project.tags}</span>
                <p className="mt-2 flex">
                    <a href={project.link} target="_blank">
                        <button type="button" class="flex gap-2 items-center text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            <i class="fa-solid fa-link"></i>{t('link')}
                        </button>
                    </a>
                </p>
            </div>
          </div>
        ))}
        </article>
      </section>
    </>
  );
}