"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || mobileMenuOpen ? 'bg-white/95 dark:bg-gray-900/95 shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 overflow-hidden rounded-lg">
                <Image
                  src="/images/logo.jpeg"
                  alt="C&C Conecta Consultores Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400">
                  C&C Conecta
                </span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 -mt-1">
                  Consultores
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/#servicios" className="font-medium text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              Servicios
            </Link>
            <Link href="/#tecnologias" className="font-medium text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              Tecnologías
            </Link>
            <Link href="/#proceso" className="font-medium text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              Proceso
            </Link>
            <Link href="/contacto" className="font-medium text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              Contacto
            </Link>
            <Link href="/portafolio" className="font-medium text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              Portafolio
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="p-2 md:hidden rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {!mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 pb-6 border-t border-gray-200 dark:border-gray-800 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/#servicios" 
                className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link 
                href="/#tecnologias" 
                className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tecnologías
              </Link>
              <Link 
                href="/#proceso" 
                className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Proceso
              </Link>
              <Link 
                href="/contacto" 
                className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
              <Link 
                href="/portafolio" 
                className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portafolio
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}