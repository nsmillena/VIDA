import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/useAuth';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Erro ao fazer login');

      console.log('[LOGIN] Login bem-sucedido. Dados recebidos:', data);
      localStorage.setItem('token', data.token);
      login(data.user); // Salva no contexto
      navigate('/dashboard');
    } catch (err) {
      console.error('[LOGIN] Erro no login:', err.message);
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col justify-center items-center w-1/2 p-10">
        <div className="w-full max-w-md space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">Bem-vindo de volta</h1>
          <p className="text-gray-600">Digite seu e-mail e senha para acessar sua conta.</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">E-mail</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Senha</label>
              <input type="password" name="password" value={form.password} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <div className="text-right mt-1">
                <a href="#" className="text-sm text-blue-600 hover:underline">Esqueceu sua senha?</a>
              </div>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Entrar
            </button>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          </form>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">Ou entre com</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex space-x-4">
            <button className="flex items-center justify-center space-x-2 flex-1 border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition">
              <FcGoogle size={20} />
              <span>Google</span>
            </button>
            <button className="flex items-center justify-center space-x-2 flex-1 border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition">
              <FaApple size={20} />
              <span>Apple</span>
            </button>
          </div>

          <p className="text-center text-sm text-gray-600">
            Ainda não tem uma conta? <a href="/register" className="text-blue-600 hover:underline">Cadastre-se agora.</a>
          </p>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center w-1/2 bg-blue-700 text-white p-10">
        <div className="space-y-6 text-center max-w-md">
          <h2 className="text-2xl font-bold leading-snug">Transforme suas decisões em ações com o V.I.D.A.</h2>
          <p className="text-white/80">
            Organize suas finanças, estudos, saúde e tarefas com inteligência artificial personalizada.
            Reduza o estresse, ganhe tempo e alcance seus objetivos com o nosso assistente inteligente.
          </p>
          <p className="text-white/70 text-sm">
            Bem-estar, produtividade e equilíbrio na palma da sua mão.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;