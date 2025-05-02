import { useAuth } from '@/context/useAuth';
import { User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function UserProfile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard/profile');
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition text-sm font-medium"
    >
      <User className="w-4 h-4" />
      <span>{user?.name || 'Usuário'}</span>
    </button>
  );
}
