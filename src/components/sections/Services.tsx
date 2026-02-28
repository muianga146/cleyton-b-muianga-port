import { motion } from 'framer-motion';
import { Layout, Palette, Rocket, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: <Layout className="w-10 h-10" />,
    title: "Sites Profissionais",
    desc: "Desenvolvimento de sites institucionais e landing pages com navegação intuitiva e estrutura sólida."
  },
  {
    icon: <Palette className="w-10 h-10" />,
    title: "Design Moderno",
    desc: "Interfaces visuais atraentes que refletem a identidade da sua marca e cativam seus visitantes."
  },
  {
    icon: <Rocket className="w-10 h-10" />,
    title: "Performance & SEO",
    desc: "Otimização para carregamento rápido e melhores posições nos resultados do Google."
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: "Foco em Resultados",
    desc: "Estratégias de design pensadas para converter visitantes em clientes reais para seu negócio."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Serviços que <span className="text-brand-orange">Elevam</span> o Seu Negócio
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Soluções completas para quem busca qualidade, rapidez e profissionalismo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 bg-white dark:bg-white/5 rounded-2xl border border-black/5 dark:border-white/5 hover:border-brand-orange/50 transition-all hover:shadow-xl hover:-translate-y-2"
            >
              <div className="mb-6 text-brand-orange p-3 bg-brand-orange/10 rounded-xl w-fit group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
