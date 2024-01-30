
import { User } from 'firebase/auth';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { signInWithGoogle } from '../sevices/firebase';

interface AuthContextData {
  user: User | null;
  login: () => void;
  logout: () => void;
}

export const AuthGoogleContext = createContext<AuthContextData>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthGoogleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const loadStoredAuth = async () => {
      const sessionToken = sessionStorage.getItem('@Auth:token');
      const sessionUser = sessionStorage.getItem('@Auth:user');

      if (sessionToken && sessionUser) {
        setUser(JSON.parse(sessionUser));
      }
    };
    loadStoredAuth();
  }, []);

  const login = async () => {
    try {
      const result = await signInWithGoogle();
      if (result) {
        setUser(result.user);
        sessionStorage.setItem('@Auth:token', result.user.uid);
        sessionStorage.setItem('@Auth:user', JSON.stringify(result.user));
      }
    } catch (error) {
      console.error('Erro ao fazer login com o Google:', error);
    }
  };


  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('@Auth:token');
    sessionStorage.removeItem('@Auth:user');
  };
  return (
    <AuthGoogleContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthGoogleContext.Provider>
  );
};

