"use client";

import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import PageLayout from "../components/PageLayout";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '', // Corresponde al campo "subject" en tu formulario
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      // Mapeo especial para el campo "subject" a "title" (para coincidir con el template)
      [name === 'subject' ? 'title' : name]: value 
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      setError('Por favor completa todos los campos requeridos');
      setLoading(false);
      return;
    }

    // Reemplaza estos IDs con tus credenciales de EmailJS
    const serviceId = 'service_bfgnf58';
    const templateId = 'template_f6vuwwf';
    const publicKey = 'XBjUjqlPgCF4e-3Vn';

    try {
      await emailjs.send(
        serviceId,
        templateId,
        formData, // EmailJS asignará automáticamente las variables según sus nombres
        publicKey
      );

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        title: '',
        message: ''
      });
      
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (err) {
      console.error('Error al enviar el email:', err);
      setError('Hubo un error al enviar tu mensaje. Por favor intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout>
      {/* Hero section con diseño eco-tecnológico */}
      <section className="pt-32 pb-24 px-4 bg-gradient-to-br from-cyan-50 via-emerald-50/40 to-blue-50/30 dark:from-gray-900 dark:via-cyan-900/30 dark:to-emerald-900/20 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-300/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-300/10 to-teal-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header mejorado */}
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-100 to-emerald-100 dark:from-cyan-900/30 dark:to-emerald-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-medium mb-6 border border-cyan-200 dark:border-cyan-800">
                💬 Estamos aquí para ayudarte
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent">Conectemos</span> y hagamos realidad tu proyecto
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                ¿Tienes un proyecto en mente? Estamos listos para ayudarte a convertir tus ideas en realidad.
                Completa el formulario o utiliza nuestros datos de contacto para comunicarte con nosotros 🚀
              </p>
            </div>
            
            {/* Cards de contacto mejoradas */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="group text-center p-8 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 border border-emerald-100 dark:border-emerald-900/30 hover:border-emerald-300 dark:hover:border-emerald-700 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/50 dark:to-emerald-800/50 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <EnvelopeIcon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-bold mb-3 text-lg group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">📧 Email</h3>
                <p className="text-gray-600 dark:text-gray-400">info.shroudsoft@gmail.com</p>
              </div>
              
              <div className="group text-center p-8 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 border border-cyan-100 dark:border-cyan-900/30 hover:border-cyan-300 dark:hover:border-cyan-700 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-900/50 dark:to-cyan-800/50 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <PhoneIcon className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="font-bold mb-3 text-lg group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">📱 Teléfono</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">+57 3153212205</p>
                <a 
                  href="https://wa.me/573153212205" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
              
              <div className="group text-center p-8 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100 dark:border-blue-900/30 hover:border-blue-300 dark:hover:border-blue-700 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <MapPinIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-bold mb-3 text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">🌎 Ubicación</h3>
                <p className="text-gray-600 dark:text-gray-400">Medellín, Colombia</p>
              </div>
            </div>
            
            {/* Formulario de contacto mejorado */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-emerald-100 dark:border-emerald-900/30">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Envíanos un <span className="bg-gradient-to-r from-emerald-500 to-cyan-600 bg-clip-text text-transparent">mensaje</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Cuéntanos sobre tu proyecto y te responderemos lo antes posible ⚡
                </p>
              </div>
              
              {success && (
                <div className="mb-8 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 border border-emerald-200 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 rounded-2xl shadow-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">¡Mensaje enviado con éxito! 🎉</p>
                      <p className="text-sm">Nos pondremos en contacto contigo pronto.</p>
                    </div>
                  </div>
                </div>
              )}
              
              {error && (
                <div className="mb-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-300 rounded-2xl shadow-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Error al enviar ❌</p>
                      <p className="text-sm">{error}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Nombre <span className="text-emerald-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300" 
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Email <span className="text-emerald-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm focus:border-emerald-500 dark:focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300" 
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Asunto
                  </label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300" 
                    placeholder="¿De qué quieres hablarnos?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Mensaje <span className="text-emerald-500">*</span>
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6} 
                    className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none" 
                    placeholder="Cuéntanos sobre tu proyecto, ideas o consultas. ¡Estamos emocionados de conocer más detalles!"
                    required
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button 
                    type="submit"
                    disabled={loading}
                    className={`inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-emerald-500/25 transform hover:scale-105 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando mensaje...
                      </>
                    ) : (
                      <>
                        <span>Enviar mensaje</span>
                        <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}