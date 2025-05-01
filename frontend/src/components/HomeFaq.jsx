import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "Preciso saber programar para usar o V.I.D.A?",
        answer:
            "Não! O V.I.D.A foi criado para qualquer pessoa. A interface é intuitiva e a IA cuida da parte técnica pra você.",
    },
    {
        question: "Minhas informações estão seguras?",
        answer:
            "Sim, utilizamos criptografia e práticas modernas de segurança para proteger seus dados pessoais.",
    },
    {
        question: "Posso personalizar as áreas da minha organização?",
        answer:
            "Claro! Você pode editar categorias, metas, alertas e muito mais para adaptar à sua rotina.",
    },
    {
        question: "Como o V.I.D.A aprende com meus hábitos?",
        answer:
            "Com base nas suas interações, horários e prioridades, o sistema sugere ajustes e automações inteligentes.",
    },
];

export default function HomeFaq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) =>
        setOpenIndex(openIndex === index ? null : index);

    return (
        <section className="max-w-[1300px] mx-auto px-4 pb-20 text-white">
            <div className="flex justify-center">
                <div className="relative px-6 py-2 rounded-full text-base flex items-center gap-2 text-white border border-white/20 bg-white/10 backdrop-blur-sm overflow-hidden">
                    <span className="z-10">Dúvidas sobre o sistema?</span>
                    <HelpCircle className="w-4 h-4 text-white ml-1 z-10" />
                    <div className="absolute inset-0 rounded-full pointer-events-none overflow-hidden">
                        <div className="absolute w-full h-full animate-[led-move_4s_linear_infinite] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent blur-sm" />
                    </div>
                </div>
            </div>

            <h2 className="text-3xl mb-6 mt-8 md:text-4xl font-semibold text-center">
                Perguntas Frequentes
            </h2>

            <div className="max-w-3xl mx-auto space-y-4 mt-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-white/10 rounded-xl p-5 bg-white/5 backdrop-blur-sm"
                    >
                        <button
                            className="flex items-center justify-between w-full text-left text-white font-medium text-base md:text-lg"
                            onClick={() => toggle(index)}
                        >
                            {faq.question}
                            {openIndex === index ? (
                                <ChevronUp className="w-5 h-5" />
                            ) : (
                                <ChevronDown className="w-5 h-5" />
                            )}
                        </button>
                        {openIndex === index && (
                            <p className="mt-3 text-white/80 text-sm md:text-base leading-relaxed">
                                {faq.answer}
                            </p>
                        )}
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
