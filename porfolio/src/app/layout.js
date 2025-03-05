"use client";
import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "./globals.css";
import './i18n'; // Importa la configuración de i18next

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const { i18n } = useTranslation();
  useEffect(() => {
    const lng = i18n.language || 'en';
    document.documentElement.lang = lng;
  }, [i18n.language]);
  return (
    <I18nextProvider i18n={i18n}>
      <html lang="en" className="">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
          {/* Solo se muestra en modo oscuro */}
          <div className="absolute inset-0 -z-10 h-full w-full 
              bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
              bg-[size:14px_24px] 
              dark:bg-neutral-900 
              dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]">
            {/* Efecto difuminado */}
          </div>
          {/* Fondo de líneas en modo claro y oscuro */}
          <div className="absolute inset-0 -z-10 h-full w-full 
              bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
              bg-[size:14px_24px] 
              dark:bg-neutral-900 
              dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]">
            {/* Efecto difuminado */}
          </div>
          {children}
        </body>
      </html>
    </I18nextProvider>
  );
}
