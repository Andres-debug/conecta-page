import Image from "next/image";
import Link from "next/link";
import PageLayout from "../components/PageLayout";

export default function Portfolio() {
  // Proyectos reales
  const projects = [
    {
      title: "ACO Informes",
      description: "Aplicativo Web para Administración de Actividades de Pastores que permite gestionar reportes, actividades y seguimiento de la labor pastoral.",
      image: "/images/projects/Aco.PNG", 
      technologies: ["NestJS", "Prisma", "React.JS", "Tailwind", "Zustand"],
      link: "https://pastor.asocentro.org"
    },
    {
      title: "DCLearn Web Admin",
      description: "Plataforma de administración para envio de signal de Trading y administracion de usuarios de la Empresa.",
      image: "/images/projects/DcLearn.PNG",
      technologies: ["NestJS", "Prisma", "React.JS", "Tailwind", "Zustand"],
      link: "#"
    },
    {
      title: "DC Trading Mobile",
      description: "Aplicación móvil de aprendizaje diseñada para recibir en tiempo real signals de trading, valorar la efectividad de la signal y acceder a reuniones de zoom. Experiencia optimizada para dispositivos iOS y Android.",
      image: "/images/projects/DcLearnMobile.PNG", 
      technologies: ["React Native Expo", "Zustand", "NestJS", "Prisma"],
      link: "https://play.google.com/store/apps/details?id=com.parzival26.tradeproject&hl=es"
    },
    {
      title: "MundoConquist E-commerce",
      description: "E-commerce en Wordpress con Elementor y Woocommerce para la venta de pines y productos personalizados.",
      image: "/images/projects/mundoconquis.png", 
      technologies: ["Wordpress","Elementor","Woocommerce"],
      link: "https://mundoconquis.com/"
    }
  ];

  // Función para formatear correctamente las URLs
  const getProjectLink = (link: string) => {
    if (!link || link === "#") {
      return undefined; // No hay enlace disponible
    }
    
    // Asegurarse que la URL tenga el formato correcto
    if (!link.startsWith('http://') && !link.startsWith('https://')) {
      return `https://${link}`;
    }
    
    return link;
  };

  return (
    <PageLayout>
      {/* Hero section con diseño eco-tecnológico */}
      <section className="pt-32 pb-24 px-4 bg-gradient-to-br from-cyan-50 via-blue-50 to-emerald-50/40 dark:from-gray-900 dark:via-cyan-900/30 dark:to-emerald-900/20 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-300/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-300/10 to-teal-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto relative z-10">
          {/* Header mejorado */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6 border border-blue-200 dark:border-blue-800">
              🚀 Proyectos realizados
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestro <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">Portafolio</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Explora algunos de nuestros proyectos más destacados. Cada uno representa nuestro 
              compromiso con la calidad, la innovación y la solución efectiva de problemas reales 💻✨
            </p>
          </div>
          
          {/* Grid de proyectos mejorado */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-cyan-100 dark:border-cyan-900/30 hover:border-cyan-300 dark:hover:border-cyan-700 transform hover:-translate-y-3">
                {/* Imagen del proyecto */}
                <div className="h-56 relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Contenido de la card */}
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title} ✨
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tecnologías */}
                  <div className="mb-6">
                    <p className="font-semibold mb-3 text-gray-700 dark:text-gray-300">🛠️ Tecnologías:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium border border-cyan-200 dark:border-cyan-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Enlace del proyecto */}
                  {getProjectLink(project.link) ? (
                    <a 
                      href={getProjectLink(project.link)} 
                      className="inline-flex items-center text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-semibold transition-colors group-hover:translate-x-1 transform duration-300"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Ver proyecto en vivo
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="ml-2 w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  ) : (
                    <span className="inline-flex items-center text-gray-500 dark:text-gray-400 italic">
                      🔜 Próximamente disponible
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Sección CTA personalizada mejorada */}
          <div className="mt-20 p-10 bg-gradient-to-br from-emerald-50/80 via-cyan-50/60 to-blue-50/40 dark:from-emerald-900/20 dark:via-cyan-900/30 dark:to-blue-900/20 rounded-3xl shadow-2xl border border-emerald-100 dark:border-emerald-900/30 backdrop-blur-sm relative overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-300/10 to-blue-400/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-emerald-300/10 to-teal-400/10 rounded-full blur-xl"></div>
            
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 relative z-10">
              <div className="lg:w-2/3">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-cyan-100 dark:from-emerald-900/30 dark:to-cyan-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium border border-emerald-200 dark:border-emerald-800">
                    💡 Proyectos personalizados
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-6">
                  ¿Necesitas un proyecto <span className="bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent">personalizado</span>?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
                  En C&C Conecta Consultores nos especializamos en desarrollar soluciones completamente adaptadas 
                  a las necesidades específicas de cada cliente. Desde aplicaciones empresariales hasta sistemas 
                  educativos, podemos ayudarte a materializar tu visión 🎯
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl text-sm font-medium border border-emerald-200 dark:border-emerald-700 shadow-sm">
                    🔧 Desarrollo a medida
                  </span>
                  <span className="px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl text-sm font-medium border border-cyan-200 dark:border-cyan-700 shadow-sm">
                    🏗️ Arquitectura moderna
                  </span>
                  <span className="px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl text-sm font-medium border border-blue-200 dark:border-blue-700 shadow-sm">
                    📈 Soluciones escalables
                  </span>
                </div>
              </div>
              <div className="lg:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 rounded-3xl blur-lg"></div>
                  <Image
                    src="/images/logo.jpeg" 
                    alt="C&C Conecta Consultores Logo"
                    width={200}
                    height={200}
                    className="relative rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA final mejorado */}
          <div className="mt-20 text-center">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6">
                ¿Listo para convertir tu idea en <span className="bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent">realidad</span>?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Contáctanos para discutir cómo podemos ayudarte con tu próximo proyecto.
                ¡Estamos emocionados de conocer tus ideas! 🚀
              </p>
            </div>
            <Link 
              href="/contacto" 
              className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-emerald-500/25 transform hover:scale-105 group"
            >
              <span>Contactar ahora</span>
              <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}