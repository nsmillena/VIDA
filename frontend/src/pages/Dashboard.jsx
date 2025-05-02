import Sidebar from "@/components/dashboard/Sidebar";
import UserProfile from "@/components/dashboard/UserProfile";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col p-6 overflow-y-auto">
        {/* Topo com botão de perfil */}
        <div className="flex justify-end mb-6">
          <UserProfile />
        </div>

        {/* Conteúdo do dashboard */}
        <div>
          <h1 className="text-2xl font-semibold mb-2">Bem-vindo ao seu painel!</h1>
          <p className="text-white/80 max-w-xl">
            Aqui você poderá acessar todas as funcionalidades do sistema VIDA:
            tarefas, finanças, estudos e cuidados com a saúde — tudo em um só lugar.
          </p>
        </div>
      </div>
    </div>
  );
}
