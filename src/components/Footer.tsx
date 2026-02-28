import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-black/5 dark:border-white/5 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <a href="#" className="font-display font-black text-2xl tracking-tighter">
            CM<span className="text-brand-orange">.</span>
          </a>
          <p className="text-sm text-gray-500 mt-2">
            © 2026 Cleyton Muianga. Maputo, Moçambique. <br />
            Todos os direitos reservados.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="https://www.instagram.com/sinteticoestudio?igsh=MXRpOHFhZGVzcmc2MQ==" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-brand-orange hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}
