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
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {/* Solo se muestra en modo oscuro */}
          <div className="hidden dark:block absolute top-0 z-[-2] h-screen w-screen 
              bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          </div>
          {/* Fondo de líneas en modo claro y oscuro */}
          <div class="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

          {children}
        </body>
      </html>
    </I18nextProvider>
  );
}
