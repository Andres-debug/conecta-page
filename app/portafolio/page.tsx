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
      description: "Plataforma de administración para sistema educativo digital. Gestión completa de cursos, estudiantes, recursos didácticos y métricas de aprendizaje.",
      image: "/images/projects/DcLearn.PNG",
      technologies: ["NestJS", "Prisma", "React.JS", "Tailwind", "Zustand"],
      link: "#"
    },
    {
      title: "DClearn Mobile",
      description: "Aplicación móvil de aprendizaje diseñada para acceso a contenidos educativos en cualquier lugar. Experiencia optimizada para dispositivos iOS y Android.",
      image: "/images/projects/DcLearnMobile.PNG", 
      technologies: ["React Native Expo", "Zustand", "NestJS", "Prisma"],
      link: "https://play.google.com/store/apps/details?id=com.parzival26.tradeproject&hl=es"
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
      <div className="pt-32 pb-24 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Nuestro Portafolio</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-3xl">
            Explora algunos de nuestros proyectos más destacados. Cada uno representa nuestro 
            compromiso con la calidad, la innovación y la solución efectiva de problemas reales.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 relative bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <p className="font-semibold mb-2">Tecnologías:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Enlace mejorado que se abre en una nueva pestaña */}
                  {getProjectLink(project.link) ? (
                    <a 
                      href={getProjectLink(project.link)} 
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Ver detalles
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-1 w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  ) : (
                    <span className="text-gray-500 italic">Próximamente</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Sección para un proyecto destacado o personalizado */}
          <div className="mt-12 p-8 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">¿Necesitas un proyecto personalizado?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  En ShroudSoft nos especializamos en desarrollar soluciones completamente adaptadas a las necesidades específicas de cada cliente. 
                  Desde aplicaciones empresariales hasta sistemas educativos, podemos ayudarte a materializar tu visión.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm font-medium">Desarrollo a medida</span>
                  <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm font-medium">Arquitectura moderna</span>
                  <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm font-medium">Soluciones escalables</span>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <Image
                  src="/images/logo.PNG" 
                  alt="ShroudSoft Logo"
                  width={180}
                  height={180}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">¿Listo para convertir tu idea en realidad?</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Contáctanos para discutir cómo podemos ayudarte con tu próximo proyecto.
            </p>
            <Link href="/contacto" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-600 hover:bg-slate-700 transition-colors">
              Contactar ahora
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}