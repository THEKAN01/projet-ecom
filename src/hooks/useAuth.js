import { useState, useCallback } from 'react';
import { authService } from '../services/api';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (email: string, password: string) => {
    try {
      await authService.login(email, password);
      setIsAuthenticated(true);
      setError(null);
    } catch (err) {
      setError('Échec de la connexion');
      throw err;
    }
  }, []);

  const register = useCallback(async (email: string, password: string, full_name: string) => {
    try {
      await authService.register(email, password, full_name);
      setError(null);
    } catch (err) {
      setError('Échec de l\'inscription');
      throw err;
    }
  }, []);

  const logout = useCallback(() => {
    authService.logout();
    setIsAuthenticated(false);
  }, []);

  return {
    isAuthenticated,
    error,
    login,
    register,
    logout
  };
};