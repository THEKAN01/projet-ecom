import React, { createContext, useContext, useState, useEffect } from 'react';

// Création du contexte du thème
const ThemeContext = createContext();

// Hook personnalisé pour utiliser le contexte du thème
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Vérifier si un thème est déjà stocké dans localStorage
  const storedTheme = localStorage.getItem('theme') || 'light';

  // État pour stocker le thème actuel
  const [theme, setTheme] = useState(storedTheme);

  // Mettre à jour la classe du <html> et localStorage lorsque le thème change
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Fonction pour basculer entre le mode clair et sombre
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
