import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Smartphone, Zap } from 'lucide-react';

const features = [
  {
    icon: <Clock className="w-6 h-6 text-brand-orange" />,
    title: "Entrega Rápida",
    desc: "Sites prontos em tempo recorde (média 8 dias)."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-brand-orange" />,
    title: "100% Responsivo",
    desc: "Perfeito em telemóveis, tablets e desktops."
  },
  {
    icon: <Zap className="w-6 h-6 text-brand-orange" />,
    title: "Design Exclusivo",
    desc: "Criado do zero para sua marca, sem templates genéricos."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-brand-orange" />,
    title: "Preço Acessível",
    desc: "Qualidade premium com valores justos para Moçambique."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10">
              <img 
                src="https://lh3.googleusercontent.com/d/1NZJuw-NHW_7fDxCe3VEK9XGyLi4PvnJR=w1000" 
                alt="Cleyton Muianga" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-display font-bold text-xl">Cleyton Muianga</p>
                <p className="text-sm opacity-80">Maputo, Moçambique</p>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-brand-orange/30 rounded-2xl z-0" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 leading-tight">
              Transformo ideias em <span className="text-brand-orange">experiências digitais</span>.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Sou WebDesigner e Desenvolvedor Front-End especializado em criar sites modernos, rápidos e focados em conversão. 
              Ajudo empresas e profissionais em Maputo a estabelecerem uma presença online forte e profissional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 transition-colors border border-transparent hover:border-black/5 dark:hover:border-white/5 shadow-sm">
                  <div className="bg-brand-orange/10 p-2 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm font-mono text-gray-500">
              <span>cleytonbmuianga@gmail.com</span>
              <span className="text-brand-orange">•</span>
              <span>Maputo, MZ</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
