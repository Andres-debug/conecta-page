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
      <div className="pt-32 pb-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-12">
              ¿Tienes un proyecto en mente? Estamos listos para ayudarte a convertir tus ideas en realidad.
              Completa el formulario o utiliza nuestros datos de contacto para comunicarte con nosotros.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center text-center p-6 border rounded-lg">
                <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center mb-4">
                  <EnvelopeIcon className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">info.shroudsoft@gmail.com</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 border rounded-lg">
                <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center mb-4">
                  <PhoneIcon className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                </div>
                <h3 className="font-bold mb-2">Teléfono</h3>
                <p className="text-gray-600 dark:text-gray-400">+57 3153212205</p>
                <a 
                  href="https://wa.me/573153212205" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 mt-2 flex items-center"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 border rounded-lg">
                <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center mb-4">
                  <MapPinIcon className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                </div>
                <h3 className="font-bold mb-2">Ubicación</h3>
                <p className="text-gray-600 dark:text-gray-400">Medellín, Colombia</p>
              </div>
            </div>
            
            <div className="border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
              
              {success && (
                <div className="mb-6 p-4 bg-green-100 border border-green-200 text-green-700 rounded-md">
                  ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
                </div>
              )}
              
              {error && (
                <div className="mb-6 p-4 bg-red-100 border border-red-200 text-red-700 rounded-md">
                  {error}
                </div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Nombre <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-md bg-white dark:bg-gray-800" 
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Email <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border rounded-md bg-white dark:bg-gray-800" 
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">Asunto</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject" // El name es "subject" pero internamente lo mapeamos a "title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-md bg-white dark:bg-gray-800" 
                    placeholder="Asunto de tu mensaje"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Mensaje <span className="text-red-500">*</span></label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    className="w-full p-3 border rounded-md bg-white dark:bg-gray-800" 
                    placeholder="Cuéntanos sobre tu proyecto o consulta"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={loading}
                  className={`px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white font-medium rounded-md flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : "Enviar mensaje"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}