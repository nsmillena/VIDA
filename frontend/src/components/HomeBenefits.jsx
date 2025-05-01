import { Rocket, BarChart2, Sliders, LayoutDashboard } from "lucide-react";
import CtaButton from "@/components/ui/CtaButton";

export default function HomeBenefits() {
    const cards = [
        {
            title: "Organização Centralizada",
            subtitle: "Dashboard inteligente",
            description:
                "Acesse todos os seus dados em um só lugar — tarefas, finanças, saúde e estudos sincronizados para uma visão completa da sua vida.",
            icon: <LayoutDashboard size={20} />,
        },
        {
            title: "Assistente Preditivo",
            subtitle: "IA personalizada",
            description:
                "O V.I.D.A aprende com seus hábitos e sugere ações personalizadas para melhorar sua produtividade, bem-estar e organização diária.",
            icon: <Sliders size={20} />,
        },
        {
            title: "Controle Total e Flexível",
            subtitle: "Rotina sob medida",
            description:
                "Crie metas, categorize tarefas, acompanhe seu progresso e personalize sua rotina com total autonomia.",
            icon: <BarChart2 size={20} />,
        },
    ];

    return (
        <section className="max-w-[1300px] mx-auto px-4 pt-20 pb-20 text-white">
            <div className="flex justify-center">
                <div className="relative px-6 py-2 rounded-full text-base flex items-center gap-2 text-white border border-white/20 bg-white/10 backdrop-blur-sm overflow-hidden">
                    <span className="z-10">Área restrita com IA personalizada</span>
                    <Rocket className="w-4 h-4 text-white ml-1 z-10" />
                    <div className="absolute inset-0 rounded-full pointer-events-none overflow-hidden">
                        <div className="absolute w-full h-full animate-[led-move_4s_linear_infinite] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent blur-sm" />
                    </div>
                </div>
            </div>

            <h2 className="text-3xl mb-4 mt-6 md:text-4xl font-semibold text-center leading-snug max-w-3xl mx-auto">
                Explore o potencial da inteligência artificial na sua organização pessoal
            </h2>

            <p className=" text-white/80 text-center max-w-xl mx-auto text-sm md:text-base">
                Descubra como o V.I.D.A transforma sua rotina com uma plataforma centralizada, sugestões inteligentes e total controle sobre sua vida.
            </p>

            <div className="max-w-[1300px] flex justify-center flex-wrap md:flex-nowrap mx-auto px-4 mt-10 gap-6">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-sm w-full backdrop-blur-md shadow-md hover:shadow-lg transition"
                    >
                        <div className="w-10 h-10 flex items-center justify-center mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 border border-white/20 shadow-[0_0_12px_0_rgba(96,165,250,0.4)]">
                            {card.icon}
                        </div>
                        <p className="text-sm text-white/60 mb-1">{card.subtitle}</p>
                        <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                        <p className="text-sm text-white/80 leading-relaxed">{card.description}</p>
                    </div>
                ))}
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
      `}</style>
        </section>
    );
}
