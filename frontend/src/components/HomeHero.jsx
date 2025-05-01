import { Rocket } from "lucide-react";
import CtaButton from "@/components/ui/CtaButton";
import {
  Book,
  DollarSign,
  HeartPulse,
  Brain,
  CheckCircle,
} from "lucide-react";

export default function HomeHero() {
  const features = [
    { label: "Estudos", icon: <Book size={20} /> },
    { label: "Finanças", icon: <DollarSign size={20} /> },
    { label: "Saúde física", icon: <HeartPulse size={20} /> },
    { label: "Saúde mental", icon: <Brain size={20} /> },
    { label: "Tarefas Diárias", icon: <CheckCircle size={20} /> },
  ];

  return (
    <section className="max-w-[1300px] mx-auto px-4 pt-24 flex flex-col items-center text-center text-white">
      <div className="relative mb-6">
        <div className="relative px-6 py-2 rounded-full text-base flex items-center gap-2 text-white z-10 border border-white/20 bg-white/10 backdrop-blur-sm overflow-hidden">
          <span className="z-10">IA para produtividade e bem-estar</span>
          <Rocket className="w-4 h-4 text-white ml-1 z-10" />
          <div className="absolute inset-0 rounded-full pointer-events-none overflow-hidden">
            <div className="absolute w-full h-full animate-[led-move_4s_linear_infinite] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent blur-sm" />
          </div>
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-semibold leading-tight max-w-[900px]">
        Organize Completamente sua{" "}
        <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-transparent bg-clip-text">
          VIDA
        </span>{" "}
        com{" "}
        <span className="bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-transparent bg-clip-text">
          Inteligência Artificial
        </span>
      </h1>

      <p className="mt-4 text-white/80 max-w-xl text-sm md:text-base">
        Automatize tarefas, cuide da sua saúde e alcance seus objetivos com ajuda da IA do V.I.D.A.
      </p>

      <div className="mt-6">
        <CtaButton />
      </div>

      <div className="mt-10 w-full">
        <div className="text-center mb-6">
          <p className=" text-white/80 text-sm md:text-base">
            O V.I.D.A organiza sua vida em diversas áreas:
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 px-4 max-w-[1300px]">
          {features.map((feature, index) => (
            <span
              key={index}
              className="flex items-center gap-2 text-lg md:text-xl font-semibold text-white/80 hover:text-white transition"
            >
              {feature.icon}
              {feature.label}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes led-move {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes spin {
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
