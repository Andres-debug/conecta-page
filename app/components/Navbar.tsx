import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-10 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md py-4 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-500 rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                src="/images/logo.PNG"
                alt="ShroudSoft Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-cover"
              />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-900 dark:from-gray-200 dark:to-gray-100">
              ShroudSoft
            </span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="font-medium text-gray-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
            Inicio
          </Link>
          <Link href="/portafolio" className="font-medium text-gray-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
            Portafolio
          </Link>
          <Link href="/contacto" className="font-medium text-gray-600 dark:text-gray-300 hover:text-slate-800 dark:hover:text-slate-200 transition-colors">
            Contacto
          </Link>
        </div>
        <button className="p-2 md:hidden rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </nav>
  );
}