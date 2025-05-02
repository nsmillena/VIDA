import Sidebar from "@/components/dashboard/Sidebar";
import DashboardRightPanel from '@/components/dashboard/DashboardRightPanel';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      <Sidebar />

      <div className="flex flex-1 flex-col px-12 py-8">
        <div className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-2xl font-semibold mb-2">Bem-vindo ao seu painel!</h1>
            <p className="text-white/80 max-w-xl">
              Aqui você poderá acessar todas as funcionalidades do sistema VIDA:
              tarefas, finanças, estudos e cuidados com a saúde — tudo em um só lugar.
            </p>
          </div>
        </div>
      </div>

      <DashboardRightPanel />
    </div>
  );
}
