import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from '@/services/axios';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardRightPanel from '@/components/dashboard/DashboardRightPanel';
import { ArrowLeft } from 'lucide-react';

export default function DashboardEventDetail() {
  const { id } = useParams();
  const userId = localStorage.getItem('user');
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchEvent = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/events/${userId}/${id}`);
      setEvent(res.data);

      setError('');
    } catch (err) {
      console.error('Erro ao buscar evento:', err);
      setError('Erro ao carregar os detalhes do evento.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvent();
    // eslint-disable-next-line
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
        <Sidebar />
        <main className="flex-1 flex items-center justify-center text-xl font-semibold">
          Carregando...
        </main>
        <DashboardRightPanel />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
        <Sidebar />
        <main className="flex-1 flex items-center justify-center text-red-400 font-semibold">
          {error}
        </main>
        <DashboardRightPanel />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="flex min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
        <Sidebar />
        <main className="flex-1 flex items-center justify-center text-gray-400 font-semibold">
          Evento não encontrado.
        </main>
        <DashboardRightPanel />
      </div>
    );
  }

  // Formatar data e hora para exibição
  const eventDate = new Date(event.datetime);
  const formattedDate = eventDate.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
  const formattedTime = eventDate.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      <Sidebar />

      <main className="flex-1 px-12 py-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto bg-[#1f2937] rounded-xl p-8 shadow-xl">
          <Link
            to="/dashboard/study"
            className="inline-flex items-center gap-2 text-blue-400 hover:underline mb-6"
          >
            <ArrowLeft size={20} /> Voltar para Eventos
          </Link>

          <h1 className="text-3xl font-bold mb-4">{event.title}</h1>

          {event.description && (
            <p className="text-gray-300 mb-6 whitespace-pre-wrap">{event.description}</p>
          )}

          <div className="mb-6 space-y-2">
            <div>
              <span className="font-semibold">Data:</span> {formattedDate}
            </div>
            <div>
              <span className="font-semibold">Hora:</span> {formattedTime}
            </div>
            {event.category && (
              <div>
                <span className="font-semibold">Categoria:</span>{' '}
                <span className="capitalize">{event.category}</span>
              </div>
            )}
            {event.location && (
              <div>
                <span className="font-semibold">Local:</span> {event.location}
              </div>
            )}
          </div>
        </div>
      </main>

      <DashboardRightPanel />
    </div>
  );
}
