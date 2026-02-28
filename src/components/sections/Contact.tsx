import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    package: 'Básico (7.000 MZN)',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Novo Contacto via Site - ${formData.name}`;
    const body = `Nome: ${formData.name}
Telefone: ${formData.phone}
Email: ${formData.email}
Pacote: ${formData.package}

Mensagem:
${formData.message}`;

    window.location.href = `mailto:cleytonbmuianga@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <h2 className="font-display font-black text-4xl md:text-6xl mb-6">
              Vamos Criar Algo <br />
              <span className="text-brand-orange">Extraordinário?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
              Pronto para transformar sua presença digital? Preencha o formulário ou use os contactos diretos abaixo. Respondo em menos de 24h.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-full">
                  <Phone className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Telefone / WhatsApp</h3>
                  <p className="text-gray-500">+258 84 95 39 582</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-full">
                  <Mail className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-gray-500">cleytonbmuianga@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 dark:bg-white/5 rounded-full">
                  <MapPin className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Localização</h3>
                  <p className="text-gray-500">Maputo, Moçambique</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-16 pt-16 border-t border-black/10 dark:border-white/10">
              <h4 className="font-mono text-sm uppercase tracking-widest mb-6 opacity-60">Como funciona</h4>
              <div className="flex justify-between text-sm font-bold">
                <div className="flex flex-col gap-2">
                  <span className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center">1</span>
                  <span>Contacto</span>
                </div>
                <div className="h-[1px] bg-gray-300 flex-1 mx-4 mt-4" />
                <div className="flex flex-col gap-2">
                  <span className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center">2</span>
                  <span>Briefing</span>
                </div>
                <div className="h-[1px] bg-gray-300 flex-1 mx-4 mt-4" />
                <div className="flex flex-col gap-2">
                  <span className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center">3</span>
                  <span>Design</span>
                </div>
                <div className="h-[1px] bg-gray-300 flex-1 mx-4 mt-4" />
                <div className="flex flex-col gap-2">
                  <span className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center">4</span>
                  <span>Entrega</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-white/5 p-8 md:p-10 rounded-3xl border border-black/5 dark:border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wide">Nome</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl p-4 focus:outline-none focus:border-brand-orange transition-colors" 
                    placeholder="Seu nome" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wide">Telefone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl p-4 focus:outline-none focus:border-brand-orange transition-colors" 
                    placeholder="+258..." 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wide">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl p-4 focus:outline-none focus:border-brand-orange transition-colors" 
                  placeholder="seu@email.com" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wide">Pacote de Interesse</label>
                <select 
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl p-4 focus:outline-none focus:border-brand-orange transition-colors"
                >
                  <option>Básico (7.000 MZN)</option>
                  <option>Intermédio (10.500 MZN)</option>
                  <option>Premium (15.000 MZN)</option>
                  <option>Outro / Personalizado</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wide">Mensagem</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4} 
                  className="w-full bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl p-4 focus:outline-none focus:border-brand-orange transition-colors" 
                  placeholder="Conte-me sobre o seu projeto..." 
                />
              </div>

              <button type="submit" className="w-full bg-brand-orange text-white font-bold uppercase tracking-wider py-4 rounded-xl hover:bg-brand-orange/90 transition-colors flex items-center justify-center gap-2">
                Enviar Mensagem <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
