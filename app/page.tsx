import Image from "next/image";
import Link from "next/link";
import PageLayout from "./components/PageLayout";
// Necesitarás instalar esta librería: npm install @heroicons/react
import { 
  CodeBracketIcon, 
  ComputerDesktopIcon,
  ScaleIcon,
  HomeIcon,
  PaintBrushIcon, 
  MagnifyingGlassIcon,
  RocketLaunchIcon,
  CheckBadgeIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section con colores tecnológicos y ambientales */}
      <section className="pt-32 pb-24 px-4 bg-gradient-to-br from-cyan-50 via-blue-50 to-green-50 dark:from-slate-900 dark:via-cyan-900/50 dark:to-emerald-900/30 min-h-screen flex items-center relative overflow-hidden">
        {/* Elementos decorativos tecnológicos */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-gradient-to-tr from-emerald-400/20 to-teal-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-indigo-400/10 to-purple-500/10 rounded-full filter blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium mb-6 border border-cyan-200 dark:border-cyan-800">
                🌱 Servicios profesionales integrales
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent">Conectamos</span> tu negocio con <span className="bg-gradient-to-r from-blue-500 to-emerald-600 bg-clip-text text-transparent">soluciones</span> integrales
              </h1>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 leading-relaxed">
                Ofrecemos una gama integral de servicios profesionales que incluyen asesoramiento legal, desarrollo de software, servicios técnicos y científicos, además de gestión inmobiliaria 🚀
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contacto" className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white font-medium rounded-xl text-center transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center group transform hover:scale-105">
                  <span>Contáctanos</span>
                  <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#servicios" className="px-8 py-4 border-2 border-cyan-300 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 font-medium rounded-xl text-center transition-colors flex items-center justify-center group backdrop-blur-sm">
                  <span>Nuestros servicios</span>
                  <ChevronDownIcon className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* Contenedor del logo mejorado */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 rounded-3xl shadow-2xl blur-lg animate-pulse"></div>
                <div className="relative bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 rounded-3xl shadow-xl p-8 border border-cyan-200 dark:border-cyan-700 flex flex-col items-center">
                  <div className="w-full h-auto mb-6">
                    <Image 
                      src="/images/logo.jpeg"
                      alt="C&C Conecta Consultores Logo"
                      width={400}
                      height={400}
                      className="w-full h-auto object-contain drop-shadow-lg"
                      priority
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-600 dark:from-emerald-400 dark:to-cyan-500 mb-2">
                    C&C Conecta
                  </h3>
                  <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-600 dark:from-cyan-400 dark:to-emerald-500 mb-2">
                    Consultores
                  </h4>
                  <p className="text-sm text-center text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">
                    🔬 Legal · 💻 Tecnología · 🏢 Inmobiliario
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios con diseño tecnológico y ambiental */}
          <section id="servicios" className="py-20 bg-gradient-to-br from-white via-cyan-50/30 to-emerald-50/30 dark:from-gray-950 dark:via-cyan-950/30 dark:to-emerald-950/20 relative overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-300/10 to-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-emerald-300/10 to-teal-400/10 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-cyan-100 dark:from-emerald-900/30 dark:to-cyan-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium mb-4 border border-emerald-200 dark:border-emerald-800">
                  🌟 Nuestras especialidades
                </span>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Servicios <span className="bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent">Integrales</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Combinamos experiencia técnica y legal para ofrecer soluciones completas que impulsen el crecimiento de tu negocio
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="group text-center p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 border border-emerald-100 dark:border-emerald-900/30 hover:border-emerald-300 dark:hover:border-emerald-700 transform hover:-translate-y-2">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900 dark:to-emerald-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <ScaleIcon className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Consultoría Legal 🏛️
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Asesoría jurídica especializada en derecho empresarial, contratos y normativa legal para proteger y hacer crecer tu negocio
                  </p>
                </div>
                
                <div className="group text-center p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 border border-cyan-100 dark:border-cyan-900/30 hover:border-cyan-300 dark:hover:border-cyan-700 transform hover:-translate-y-2">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-900 dark:to-cyan-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <ComputerDesktopIcon className="h-10 w-10 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Servicios Técnicos 🔧
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Soluciones tecnológicas avanzadas, consultoría IT e implementación de sistemas para optimizar tus procesos
                  </p>
                </div>
                
                <div className="group text-center p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 border border-indigo-100 dark:border-indigo-900/30 hover:border-indigo-300 dark:hover:border-indigo-700 transform hover:-translate-y-2">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900 dark:to-indigo-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <CodeBracketIcon className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    Desarrollo de Software 💻
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Aplicaciones web, móviles y sistemas personalizados con tecnología de vanguardia y arquitecturas escalables
                  </p>
                </div>
                
                <div className="group text-center p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange-100 dark:border-orange-900/30 hover:border-orange-300 dark:hover:border-orange-700 transform hover:-translate-y-2">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <HomeIcon className="h-10 w-10 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    Gestión Inmobiliaria 🏢
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Administración profesional de propiedades, asesoría en inversiones inmobiliarias y gestión integral de contratos
                  </p>
                </div>
              </div>
            </div>
          </section>      {/* Tecnologías con diseño futurista */}
      <section id="tecnologias" className="py-24 px-4 bg-gradient-to-br from-slate-50 via-cyan-50/40 to-blue-50/30 dark:from-gray-900 dark:via-slate-900/50 dark:to-cyan-900/20 relative overflow-hidden">
        {/* Elementos decorativos tecnológicos */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-tr from-emerald-400/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-indigo-400/10 to-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          {/* Grid tecnológico sutil */}
          <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="opacity-30">
            <defs>
              <pattern id="tech-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-cyan-300 dark:text-cyan-700" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tech-grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium mb-4 border border-cyan-200 dark:border-cyan-800">
              🚀 Herramientas de última generación
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stack <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Tecnológico</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Utilizamos tecnologías modernas y robustas para crear soluciones escalables y sostenibles 🌿
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {[
              { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
              { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
              { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
              { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
              { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
              { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
              { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
              { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
              { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
              { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
              { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
              { name: "TailwindCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" },
            ].map((tech, index) => (
              <div key={index} className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-white/50 dark:border-gray-700/50 hover:border-cyan-200 dark:hover:border-cyan-700 hover:bg-white/90 dark:hover:bg-gray-800/90">
                <div className="flex flex-col items-center h-full justify-center">
                  <div className="h-12 w-12 mb-4 flex items-center justify-center p-2 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 group-hover:scale-110 transition-transform duration-300">
                    <Image 
                      src={tech.icon} 
                      alt={`${tech.name} logo`} 
                      width={40}
                      height={40}
                      className={`w-8 h-8 object-contain ${
                        tech.name === 'Next.js' ? 'dark:invert' : ''
                      } ${tech.name === 'NestJS' ? 'dark:invert-[0.85] dark:hue-rotate-[300deg]' : ''}
                        ${tech.name === 'TailwindCSS' ? 'dark:invert' : ''}`}
                    />
                  </div>
                  <p className="font-semibold text-sm group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{tech.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso con diseño eco-tecnológico */}
      <section id="proceso" className="py-24 px-4 bg-gradient-to-br from-emerald-50/40 via-white to-cyan-50/30 dark:from-gray-950 dark:via-emerald-950/20 dark:to-cyan-950/10 relative overflow-hidden">
        {/* Elementos decorativos ambientales */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-300/10 to-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-300/10 to-blue-400/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium mb-4 border border-emerald-200 dark:border-emerald-800">
              🌱 Metodología sostenible
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestro <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Proceso</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Metodología ágil y colaborativa enfocada en resultados excelentes y sostenibles 🚀
            </p>
          </div>
          
          <div className="relative">
            {/* Línea conectora vertical para dispositivos móviles */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-teal-500 to-cyan-500 md:hidden rounded-full shadow-lg"></div>
            
            {/* Línea conectora horizontal para desktop */}
            <div className="hidden md:block absolute left-0 right-0 top-28 h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 rounded-full shadow-lg"></div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Descubrimiento",
                  description: "Analizamos tus objetivos, necesidades y requerimientos para definir el alcance del proyecto de manera sostenible.",
                  icon: <MagnifyingGlassIcon className="w-6 h-6" />,
                  color: "from-emerald-500 to-teal-600",
                  emoji: "🔍"
                },
                {
                  step: "2",
                  title: "Diseño",
                  description: "Creamos wireframes y prototipos que establecen la estructura y experiencia visual del producto.",
                  icon: <PaintBrushIcon className="w-6 h-6" />,
                  color: "from-teal-500 to-cyan-600",
                  emoji: "🎨"
                },
                {
                  step: "3",
                  title: "Desarrollo",
                  description: "Construimos tu solución usando metodologías ágiles con ciclos iterativos de feedback continuo.",
                  icon: <CodeBracketIcon className="w-6 h-6" />,
                  color: "from-cyan-500 to-blue-600",
                  emoji: "⚡"
                },
                {
                  step: "4",
                  title: "Lanzamiento",
                  description: "Desplegamos y optimizamos tu solución para asegurar un lanzamiento exitoso y evolución continua.",
                  icon: <RocketLaunchIcon className="w-6 h-6" />,
                  color: "from-blue-500 to-indigo-600",
                  emoji: "🚀"
                },
              ].map((phase, index) => (
                <div key={index} className="relative">
                  {/* Diseño para móviles (vertical) */}
                  <div className="md:hidden flex mb-8">
                    <div className={`bg-gradient-to-br ${phase.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl z-10 flex-shrink-0 border-2 border-white/20`}>
                      {phase.icon}
                    </div>
                    <div className="ml-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-emerald-100 dark:border-emerald-900/30 flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">PASO {phase.step}</span>
                        <span className="text-lg">{phase.emoji}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{phase.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{phase.description}</p>
                    </div>
                  </div>
                  
                  {/* Diseño para desktop (horizontal) */}
                  <div className="hidden md:block">
                    {/* Conector con círculo (excepto para el primer elemento) */}
                    {index > 0 && (
                      <div className="absolute left-0 top-28 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-3 border-emerald-500 shadow-lg z-20"></div>
                      </div>
                    )}
                    
                    <div className="flex flex-col items-center">
                      <div className={`bg-gradient-to-br ${phase.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl z-10 mb-8 relative border-2 border-white/20 group-hover:scale-110 transition-all duration-300`}>
                        {phase.icon}
                        <div className="absolute -top-2 -right-2 text-2xl">{phase.emoji}</div>
                      </div>
                      <div className={`bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-emerald-100 dark:border-emerald-900/30 h-56 flex flex-col justify-center group hover:shadow-2xl hover:border-emerald-200 dark:hover:border-emerald-700 transition-all duration-500 hover:-translate-y-2 hover:bg-white/90 dark:hover:bg-gray-900/90`}>
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">PASO {phase.step}</span>
                          <span className="text-lg">{phase.emoji}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors text-center">{phase.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">{phase.description}</p>
                      </div>
                    </div>
                    
                    {/* Conector con círculo (excepto para el último elemento) */}
                    {index < 3 && (
                      <div className="absolute right-0 top-28 transform translate-x-1/2 -translate-y-1/2">
                        <div className="w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-3 border-emerald-500 shadow-lg z-20"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Conector para dispositivos móviles */}
                  {index < 3 && (
                    <div className="md:hidden absolute left-8 top-16 bottom-0 w-1 bg-gradient-to-b from-transparent to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección de contacto con diseño eco-tecnológico */}
      <section id="contacto" className="py-24 px-4 bg-gradient-to-br from-cyan-50 via-emerald-50/40 to-blue-50/30 dark:from-gray-900 dark:via-cyan-900/30 dark:to-emerald-900/20 relative overflow-hidden">
        {/* Elementos decorativos ambientales */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-emerald-300/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-300/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
            <div className="md:w-1/2">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-cyan-100 dark:from-emerald-900/30 dark:to-cyan-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium mb-4 border border-emerald-200 dark:border-emerald-800">
                🤝 Empecemos a trabajar juntos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para <span className="bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent">transformar</span> tu negocio?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Cuéntanos sobre tus necesidades y descubre cómo nuestros servicios integrales pueden ayudarte a alcanzar tus objetivos de manera sostenible 🌱
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/50 dark:to-emerald-800/50 flex items-center justify-center mr-4">
                    <CheckBadgeIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span>✨ Consulta inicial sin compromiso</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-900/50 dark:to-cyan-800/50 flex items-center justify-center mr-4">
                    <CheckBadgeIcon className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <span>⚡ Propuesta personalizada en 48 horas</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 flex items-center justify-center mr-4">
                    <CheckBadgeIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>🚀 Acompañamiento continuo</span>
                </div>
              </div>
              
              {/* Botón para ir a la página de contacto */}
              <div className="mt-10">
                <Link 
                  href="/contacto" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white font-semibold rounded-2xl text-center transition-all duration-300 shadow-xl hover:shadow-emerald-500/25 group transform hover:scale-105"
                >
                  <span>Página de contacto completa</span>
                  <ChevronRightIcon className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Enlace al portafolio */}
          <div className="mt-16 pt-8 text-center border-t border-emerald-200/50 dark:border-emerald-800/30">
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
              ¿Quieres conocer nuestros proyectos anteriores? 👀
            </p>
            <Link 
              href="/portafolio" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-300 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 font-semibold rounded-2xl transition-all duration-300 group backdrop-blur-sm hover:border-emerald-400 dark:hover:border-emerald-600"
            >
              <span>Ver nuestro portafolio</span>
              <ChevronRightIcon className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}