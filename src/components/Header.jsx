import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '#services', label: 'PS-Customisation' },
    { href: '#gaming', label: 'PS-Gaming Station' },
    { href: '#computers', label: 'PS-Computers & Phones' },
    { href: '#accessories', label: 'PS-Accessories' },
    { href: '#contact', label: 'PS-Contact' },
  ];

  return (
    <header className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50 transition-colors">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="./images/logo.png" alt="Pegazus Services" className="h-12" />
            <span className="ml-3 text-xl font-bold text-gray-800 dark:text-white">
              Pegazus Services
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          <button
            className="md:hidden text-gray-600 dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="py-2">
              <ThemeToggle />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};