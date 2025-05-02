import { useEffect, useState } from 'react';

export default function DashboardProfile() {
    const [form, setForm] = useState({ name: '', email: '', phone: '' });
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem('token');

    useEffect(() => {
        async function fetchProfile() {
            try {
                const res = await fetch('http://localhost:5000/api/user/me', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await res.json();
                setForm(data.user);
                setLoading(false);
            } catch (error) {
                console.error('[PERFIL] Erro ao carregar perfil:', error);
                setMessage('Erro ao carregar perfil');
                setLoading(false);
            }
        }

        fetchProfile();
    }, [token]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const res = await fetch('http://localhost:5000/api/user/me', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.message);
            setMessage('Perfil atualizado com sucesso!');
        } catch (error) {
            setMessage(error.message || 'Erro ao atualizar');
        }
    };

    if (loading) return <p className="text-white">Carregando...</p>;

    return (
        <div className="flex-1 p-6 text-white bg-gradient-to-br from-[#0f172a] to-[#1e293b] min-h-screen">
            <div className="max-w-xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Editar Perfil</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Nome"
                        className="w-full p-3 rounded bg-white/10 border border-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full p-3 rounded bg-white/10 border border-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Telefone"
                        className="w-full p-3 rounded bg-white/10 border border-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 px-4 rounded"
                    >
                        Salvar alterações
                    </button>

                    {message && <p className="text-sm text-center mt-2">{message}</p>}
                </form>
            </div>
        </div>
    );
}
