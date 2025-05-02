import { User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/useAuth';

export default function UserProfile() {
  const { user } = useAuth();

  return (
    <Link
      to="/dashboard/profile"
      className="bg-[#1f2937] rounded-xl p-4 flex items-center gap-3 hover:bg-[#2d3748] transition"
    >
      <div className="bg-white/10 p-2 rounded-full">
        <User className="text-white" size={24} />
      </div>
      <div>
        <h4 className="font-semibold text-sm">{user?.name || 'Usuário'}</h4>
        <p className="text-xs text-white/60">{user?.email || 'email@email.com'}</p>
      </div>
    </Link>
  );
}
