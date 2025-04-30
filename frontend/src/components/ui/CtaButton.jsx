import { Zap } from "lucide-react";

export default function CtaButton() {
  return (
    <button className="relative inline-flex h-12 active:scale-95 transition-opacity overflow-hidden rounded-full p-[2px] focus:outline-none group">

      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e0f2ff_0%,#60a5fa_40%,#3b82f6_70%,#e0f2ff_100%)]" />


      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0f172a] px-8 text-sm font-semibold text-white backdrop-blur-3xl gap-2 transition-opacity duration-300 group-hover:opacity-90 relative z-10">
        Saiba Mais
        <Zap size={16} />
      </span>
    </button>
  );
}
