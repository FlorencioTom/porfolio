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
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {/* Solo se muestra en modo oscuro */}
          <div className="hidden dark:block absolute top-0 z-[-2] h-screen w-screen 
              bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          </div>
          {/* Fondo de líneas en modo claro y oscuro */}
          <div className="absolute inset-0 -z-10 h-full w-full 
              bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
              bg-[size:14px_24px] 
              dark:bg-neutral-900 
              dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]">
            {/* Efecto difuminado */}
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
          </div>

          {children}
        </body>
      </html>
    </I18nextProvider>
  );
}
