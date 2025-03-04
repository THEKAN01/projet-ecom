import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition"
    >
      {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
    </button>
  );
};
