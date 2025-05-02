import { useAuth } from '@/context/useAuth';
import { User } from 'lucide-react';

export default function UserProfile() {
  const { user } = useAuth();

  return (
    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition text-sm font-medium">
      <User className="w-4 h-4" />
      <span>{user?.name || 'Usuário'}</span>
    </button>
  );
}
