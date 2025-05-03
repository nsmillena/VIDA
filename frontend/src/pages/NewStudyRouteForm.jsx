import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/useAuth'; 
import { BadgeCheck, Plus, Trash } from 'lucide-react';

const AREAS = [
  'Programação',
  'Design',
  'Negócios',
  'Marketing',
  'Finanças',
  'Saúde',
  'Educação',
  'Tecnologia',
  'Psicologia',
  'Artes',
];

export default function NewStudyRouteForm() {
  const [title, setTitle] = useState('');
  const [area, setArea] = useState('');
  const [description, setDescription] = useState('');
  const [topics, setTopics] = useState(['', '', '']);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { token } = useAuth();

  const handleTopicChange = (value, index) => {
    const updated = [...topics];
    updated[index] = value;
    setTopics(updated);
  };

  const addTopic = () => setTopics([...topics, '']);
  const removeTopic = (index) => {
    if (topics.length > 3) {
      setTopics(topics.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !area || !description || topics.length < 3 || topics.some(t => t.trim() === '')) {
      setError('Preencha todos os campos e tenha pelo menos 3 tópicos.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/study-routes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, area, description, topics }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || 'Erro ao criar rota de estudo.');
      }

      navigate('/dashboard/study');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-zinc-900/60 backdrop-blur rounded-2xl shadow-lg text-white">
      <h1 className="text-2xl font-bold mb-6 text-center flex items-center gap-2 justify-center">
        <BadgeCheck className="w-6 h-6 text-blue-400" />
        Criar Nova Trilha de Estudos
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {error && <p className="text-red-400 text-sm">{error}</p>}

        <div>
          <label className="block text-sm mb-1">Título</label>
          <input
            type="text"
            className="w-full bg-zinc-800 text-white rounded px-4 py-2 outline-none focus:ring-2 ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Área</label>
          <select
            className="w-full bg-zinc-800 text-white rounded px-4 py-2 outline-none focus:ring-2 ring-blue-500"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          >
            <option value="">Selecione uma área</option>
            {AREAS.map((a, i) => (
              <option key={i} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Descrição</label>
          <textarea
            className="w-full bg-zinc-800 text-white rounded px-4 py-2 outline-none focus:ring-2 ring-blue-500"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Tópicos (mínimo 3)</label>
          <div className="space-y-2">
            {topics.map((topic, i) => (
              <div key={i} className="flex items-center gap-2">
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => handleTopicChange(e.target.value, i)}
                  className="flex-1 bg-zinc-800 text-white rounded px-4 py-2 outline-none focus:ring-2 ring-blue-500"
                />
                {topics.length > 3 && (
                  <button
                    type="button"
                    onClick={() => removeTopic(i)}
                    className="text-red-400 hover:text-red-300"
                    title="Remover tópico"
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addTopic}
              className="flex items-center gap-2 text-sm text-blue-400 hover:underline mt-2"
            >
              <Plus className="w-4 h-4" />
              Adicionar tópico
            </button>
          </div>
        </div>

        <div className="text-right">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg transition-all disabled:opacity-50"
          >
            {loading ? 'Criando...' : 'Criar Rota'}
          </button>
        </div>
      </form>
    </div>
  );
}
