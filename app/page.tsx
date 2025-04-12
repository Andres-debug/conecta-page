import Image from "next/image";
import Link from "next/link";
import PageLayout from "./components/PageLayout";
// Necesitarás instalar esta librería: npm install @heroicons/react
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  BuildingOfficeIcon,
  PaintBrushIcon, 
  ShieldCheckIcon, 
  WrenchScrewdriverIcon,
  MagnifyingGlassIcon,
  RocketLaunchIcon,
  CheckBadgeIcon
} from "@heroicons/react/24/outline";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section con colores ajustados al logo */}
      <section className="pt-32 pb-24 px-4 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 min-h-screen flex items-center relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-slate-700/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-slate-500/10 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-gray-200 dark:bg-slate-800 text-slate-700 dark:text-gray-300 rounded-full text-sm font-medium mb-6">
                Innovación tecnológica a tu alcance
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transformamos <span className="bg-gradient-to-r from-slate-500 to-slate-600 bg-clip-text text-transparent">ideas</span> en software <span className="bg-gradient-to-r from-slate-500 to-slate-600 bg-clip-text text-transparent">excepcional</span>
              </h1>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300 leading-relaxed">
                Somos una startup especializada que ofrece soluciones tecnológicas de vanguardia adaptadas perfectamente a las necesidades únicas de tu negocio
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contacto" className="px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white font-medium rounded-lg text-center transition-all shadow-lg hover:shadow-slate-500/20 flex items-center justify-center group">
                  <span>Contáctanos</span>
                  <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#servicios" className="px-8 py-4 border border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 font-medium rounded-lg text-center transition-colors flex items-center justify-center group">
                  <span>Nuestros servicios</span>
                  <ChevronDownIcon className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* Contenedor del logo mejorado */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-500 to-slate-800 rounded-2xl shadow-2xl opacity-20 blur-lg"></div>
                <div className="relative bg-gray-500/5 backdrop-blur-sm dark:bg-gray-800/20 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 flex flex-col items-center">
                  <div className="w-full h-auto mb-6">
                    <Image 
                      src="/images/logo.PNG"
                      alt="ShroudSoft Logo"
                      width={400}
                      height={400}
                      className="w-full h-auto object-contain"
                      priority
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-800 dark:from-gray-200 dark:to-white mb-2">
                    ShroudSoft
                  </h3>
                  <p className="text-sm text-center text-gray-400 dark:text-gray-400 uppercase tracking-wider font-medium">
                    Desarrollo · Innovación · Resultados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios con iconos Heroicons */}
      <section id="servicios" className="py-24 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-blue-600 font-medium mb-2">Lo que hacemos</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Soluciones tecnológicas personalizadas para cada fase de tu negocio
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Desarrollo Web",
                description: "Creamos aplicaciones web modernas y responsivas utilizando las últimas tecnologías frontend y backend para una experiencia digital perfecta.",
                icon: <CodeBracketIcon className="w-8 h-8" />,
              },
              {
                title: "Aplicaciones Móviles",
                description: "Desarrollamos aplicaciones nativas e híbridas para iOS y Android que ofrecen experiencias excepcionales y funcionalidades avanzadas.",
                icon: <DevicePhoneMobileIcon className="w-8 h-8" />,
              },
              {
                title: "Software Empresarial",
                description: "Soluciones tecnológicas a medida que optimizan procesos, automatizan tareas y mejoran la eficiencia operativa de tu empresa.",
                icon: <BuildingOfficeIcon className="w-8 h-8" />,
              },
              {
                title: "Diseño UX/UI",
                description: "Creamos interfaces intuitivas y atractivas centradas en la experiencia del usuario, mejorando la interacción y aumentando las conversiones.",
                icon: <PaintBrushIcon className="w-8 h-8" />,
              },
              {
                title: "Consultoría Técnica",
                description: "Asesoramiento estratégico para tomar decisiones tecnológicas informadas que maximicen el retorno de inversión y minimicen riesgos.",
                icon: <ShieldCheckIcon className="w-8 h-8" />,
              },
              {
                title: "Mantenimiento y Soporte",
                description: "Servicios continuos de mantenimiento, actualizaciones y soporte técnico para asegurar el funcionamiento óptimo de tus aplicaciones.",
                icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
              },
            ].map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 group hover:-translate-y-1">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg inline-block mb-5 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Tecnologías con iconos reales desde CDN */}
      <section id="tecnologias" className="py-24 px-4 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <defs>
              <pattern id="tech-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-gray-200 dark:text-gray-800" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tech-grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-blue-600 font-medium mb-2">Nuestras herramientas</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stack Tecnológico</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Utilizamos tecnologías modernas y robustas para crear soluciones escalables
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
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group">
                <div className="flex flex-col items-center h-full justify-center">
                  <div className="h-12 w-12 mb-4 flex items-center justify-center">
                    <img 
                      src={tech.icon} 
                      alt={`${tech.name} logo`} 
                      className={`w-10 h-10 object-contain ${
                        tech.name === 'Next.js' ? 'dark:invert' : ''
                      } ${tech.name === 'NestJS' ? 'dark:invert-[0.85] dark:hue-rotate-[300deg]' : ''}
                        ${tech.name === 'TailwindCSS' ? 'dark:invert' : ''}`}
                    />
                  </div>
                  <p className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{tech.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso mejorado con colores que combinan con el logo */}
      <section id="proceso" className="py-24 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-slate-600 dark:text-slate-400 font-medium mb-2">Cómo trabajamos</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Proceso</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Metodología ágil y colaborativa enfocada en resultados excelentes
            </p>
          </div>
          
          <div className="relative">
            {/* Línea conectora vertical para dispositivos móviles */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-500 via-slate-600 to-slate-700 md:hidden"></div>
            
            {/* Línea conectora horizontal para desktop */}
            <div className="hidden md:block absolute left-0 right-0 top-28 h-1 bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700"></div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Descubrimiento",
                  description: "Analizamos tus objetivos, necesidades y requerimientos para definir el alcance del proyecto.",
                  icon: <MagnifyingGlassIcon className="w-6 h-6" />,
                  color: "from-slate-600 to-slate-700"
                },
                {
                  step: "2",
                  title: "Diseño",
                  description: "Creamos wireframes y prototipos que establecen la estructura y experiencia visual del producto.",
                  icon: <PaintBrushIcon className="w-6 h-6" />,
                  color: "from-slate-600 to-slate-800"
                },
                {
                  step: "3",
                  title: "Desarrollo",
                  description: "Construimos tu solución usando metodologías ágiles con ciclos iterativos de feedback.",
                  icon: <CodeBracketIcon className="w-6 h-6" />,
                  color: "from-slate-700 to-slate-800"
                },
                {
                  step: "4",
                  title: "Lanzamiento",
                  description: "Desplegamos y optimizamos tu solución para asegurar un lanzamiento exitoso y evolución continua.",
                  icon: <RocketLaunchIcon className="w-6 h-6" />,
                  color: "from-slate-700 to-slate-600"
                },
              ].map((phase, index) => (
                <div key={index} className="relative">
                  {/* Diseño para móviles (vertical) */}
                  <div className="md:hidden flex mb-8">
                    <div className={`bg-gradient-to-r ${phase.color} text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10 flex-shrink-0`}>
                      {phase.icon}
                    </div>
                    <div className="ml-6 bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md border border-gray-100 dark:border-gray-800 flex-grow">
                      <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-1">PASO {phase.step}</div>
                      <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{phase.description}</p>
                    </div>
                  </div>
                  
                  {/* Diseño para desktop (horizontal) */}
                  <div className="hidden md:block">
                    {/* Conector con círculo (excepto para el primer elemento) */}
                    {index > 0 && (
                      <div className="absolute left-0 top-28 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-3 border-slate-600 z-20"></div>
                      </div>
                    )}
                    
                    <div className="flex flex-col items-center">
                      <div className={`bg-gradient-to-r ${phase.color} text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-10 mb-8 relative`}>
                        {phase.icon}
                      </div>
                      <div className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-800 h-48 flex flex-col justify-center group hover:shadow-lg hover:border-slate-200 dark:hover:border-slate-700 transition-all duration-300 hover:-translate-y-1`}>
                        <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-1">PASO {phase.step}</div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">{phase.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{phase.description}</p>
                      </div>
                    </div>
                    
                    {/* Conector con círculo (excepto para el último elemento) */}
                    {index < 3 && (
                      <div className="absolute right-0 top-28 transform translate-x-1/2 -translate-y-1/2">
                        <div className="w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-3 border-slate-600 z-20"></div>
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

      {/* Sección de contacto con enlaces a la nueva página */}
      <section id="contacto" className="py-24 px-4 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-slate-900/80">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
            <div className="md:w-1/2">
              <span className="inline-block text-slate-600 dark:text-slate-400 font-medium mb-2">Empecemos tu proyecto</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para dar el siguiente paso?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Cuéntanos sobre tu proyecto y descubre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.
              </p>
              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                <CheckBadgeIcon className="w-5 h-5 mr-3 text-slate-600 dark:text-slate-400" />
                <span>Consulta inicial sin compromiso</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                <CheckBadgeIcon className="w-5 h-5 mr-3 text-slate-600 dark:text-slate-400" />
                <span>Presupuesto detallado en 48 horas</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <CheckBadgeIcon className="w-5 h-5 mr-3 text-slate-600 dark:text-slate-400" />
                <span>Soporte técnico continuo</span>
              </div>
              
              {/* Botón para ir a la página de contacto */}
              <div className="mt-8">
                <Link 
                  href="/contacto" 
                  className="px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white font-medium rounded-lg text-center transition-all shadow-lg hover:shadow-slate-500/20 flex items-center justify-center group w-fit"
                >
                  <span>Página de contacto completa</span>
                  <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* Formulario de contacto simplificado */}
            <div className="md:w-1/2 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-800">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="name">Nombre</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 bg-transparent"
                      placeholder="Tu nombre" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 bg-transparent"
                      placeholder="ejemplo@correo.com" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="message">Mensaje</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 bg-transparent"
                    placeholder="Cuéntanos sobre tu proyecto o consulta"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-slate-600 to-slate-800 hover:from-slate-700 hover:to-slate-900 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-slate-500/30 flex items-center justify-center group"
                >
                  <span>Enviar mensaje</span>
                  <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
          
          {/* Enlace al portafolio */}
          <div className="mt-12 pt-8 text-center">
            <p className="text-lg mb-4 text-gray-600 dark:text-gray-400">
              ¿Quieres conocer nuestros proyectos anteriores?
            </p>
            <Link 
              href="/portafolio" 
              className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 font-medium rounded-lg transition-colors group"
            >
              <span>Ver nuestro portafolio</span>
              <ChevronRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}