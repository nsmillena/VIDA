import { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      console.log('[AUTH CONTEXT] Usuário carregado do localStorage:', storedUser);
      setUser(storedUser);
    } else {
      console.log('[AUTH CONTEXT] Nenhum usuário encontrado no localStorage.');
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    console.log('[AUTH CONTEXT] Login realizado:', userData);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    console.log('[AUTH CONTEXT] Logout realizado.');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
