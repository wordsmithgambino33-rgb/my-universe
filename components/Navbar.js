
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-${theme === 'dark' ? 'cosmic' : 'base-100'} p-4 shadow-md`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className={`text-xl font-bold ${theme === 'dark' ? 'text-nebula' : 'text-accent'}`}>
          Gambino's Universe
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/" className={`${theme === 'dark' ? 'text-nebula' : 'text-accent'} hover:${theme === 'dark' ? 'text-nebula-hover' : 'text-accent-hover'} transition-colors duration-300 hover:underline`}>
            Home
          </Link>
          <Link href="/bio" className={`${theme === 'dark' ? 'text-nebula' : 'text-accent'} hover:${theme === 'dark' ? 'text-nebula-hover' : 'text-accent-hover'} transition-colors duration-300 hover:underline`}>
            Bio
          </Link>
          <Link href="/blog" className={`${theme === 'dark' ? 'text-nebula' : 'text-accent'} hover:${theme === 'dark' ? 'text-nebula-hover' : 'text-accent-hover'} transition-colors duration-300 hover:underline`}>
            Blog
          </Link>
          <Link href="/spoken-word" className={`${theme === 'dark' ? 'text-nebula' : 'text-accent'} hover:${theme === 'dark' ? 'text-nebula-hover' : 'text-accent-hover'} transition-colors duration-300 hover:underline`}>
            Spoken Word
          </Link>
          <Link href="/contact" className={`${theme === 'dark' ? 'text-nebula' : 'text-accent'} hover:${theme === 'dark' ? 'text-nebula-hover' : 'text-accent-hover'} transition-colors duration-300 hover:underline`}>
            Contact
          </Link>
          <button
            onClick={toggleTheme}
            className={`ml-4 px-3 py-1 rounded ${theme === 'dark' ? 'bg-nebula text-white' : 'bg-accent text-white'} hover:opacity-80 transition-opacity duration-300`}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? '🌞' : '🌜'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}