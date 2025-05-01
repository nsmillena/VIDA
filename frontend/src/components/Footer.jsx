import {
  Instagram,
  Link as LinkIcon,
  Github,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white/5 backdrop-blur-md border-t border-white/10 rounded-t-3xl py-16 mt-10">
      <div className="max-w-[1300px] mx-auto px-4 flex flex-col gap-12">

        <div className="flex flex-col md:flex-row justify-between gap-10">

          <div className="md:w-1/3 space-y-4">
            <div className="text-2xl font-bold text-white">VIDA</div>
            <p className="text-white text-lg font-semibold leading-relaxed">
              Sua VIDA organizada com praticidade,<br/>
              bem-estar e eficiência.
            </p>
          </div>

          <div className="flex flex-1 justify-end gap-16 text-white">
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#">Documentação</a></li>
                <li><a href="#">Novidades</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#">Privacidade</a></li>
                <li><a href="#">Termos</a></li>
                <li><a href="#">Parcerias</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/10 pt-6">
          <p className="text-white/40 text-sm">
            © 2025 VIDA. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-white/50">
            <a href="#"><Github className="hover:text-white" size={18} /></a>
            <a href="#"><Instagram className="hover:text-white" size={18} /></a>
            <a href="#"><LinkIcon className="hover:text-white" size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
