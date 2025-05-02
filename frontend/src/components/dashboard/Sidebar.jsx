import {
    CheckCircle, DollarSign, Book, HeartPulse, Brain,
    Settings, LogOut
} from 'lucide-react';
import { useAuth } from '@/context/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <aside className="w-64 bg-[#1e293b] text-white px-6 py-8 flex flex-col justify-between min-h-screen">
            <div>
                <h1 className="text-2xl font-bold mb-10">V.I.D.A</h1>
                <nav className="space-y-4 text-sm text-white/80">
                    <a href="#" className="flex items-center gap-2 hover:text-white transition"><CheckCircle size={18} /> Tarefas</a>
                    <a href="#" className="flex items-center gap-2 hover:text-white transition"><DollarSign size={18} /> Finanças</a>
                    <a href="#" className="flex items-center gap-2 hover:text-white transition"><Book size={18} /> Estudos</a>
                    <a href="#" className="flex items-center gap-2 hover:text-white transition"><HeartPulse size={18} /> Saúde Física</a>
                    <a href="#" className="flex items-center gap-2 hover:text-white transition"><Brain size={18} /> Saúde Mental</a>
                </nav>
            </div>

            <div className="space-y-4 text-sm">
                <button className="flex items-center gap-2 text-white/80 hover:text-white transition"><Settings size={18} /> Configurações</button>
                <button onClick={handleLogout} className="flex items-center gap-2 text-red-500 hover:text-red-400 transition"><LogOut size={18} /> Sair</button>
            </div>
        </aside>
    );
}
