import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

function Register() {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col justify-center items-center w-1/2 p-10">
        <div className="w-full max-w-md space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">Crie sua conta</h1>
          <p className="text-gray-600">Preencha os dados para começar a usar o V.I.D.A.</p>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Nome completo</label>
              <input type="text" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">E-mail</label>
              <input type="email" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Telefone</label>
              <input type="tel" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Senha</label>
              <input type="password" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Confirmar senha</label>
              <input type="password" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" id="captcha" className="w-4 h-4" />
              <label htmlFor="captcha" className="text-sm text-gray-700">Não sou um robô</label>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Criar conta
            </button>
          </form>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">Ou cadastre-se com</span>
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
            Já tem uma conta? <a href="/login" className="text-blue-600 hover:underline">Entre agora.</a>
          </p>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center w-1/2 bg-blue-700 text-white p-10">
        <div className="space-y-6 text-center max-w-md">
          <h2 className="text-2xl font-bold leading-snug">Comece sua transformação com o V.I.D.A.</h2>
          <p className="text-white/80">
            Cadastre-se e permita que nossa inteligência artificial ajude você a organizar sua vida, economizar seu tempo e cuidar do seu bem-estar.
          </p>
          <p className="text-white/70 text-sm">
            Sua nova jornada começa agora.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
