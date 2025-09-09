
// components/Navbar.js
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-${theme === 'dark' ? 'cosmic' : 'base-100'} p-4 shadow-md`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className={`text-xl font-bold ${theme === 'dark' ? 'text-nebula' : 'text-accent'}`}>
          My Universe
        </Link>
        <div className="space-x-6">
          <Link href="/" className={`hover:${theme === 'dark' ? 'text-nebula' : 'text-accent'} transition-colors`}>
            Home
          </Link>
          <Link href="/about" className={`hover:${theme === 'dark' ? 'text-nebula' : 'text-accent'} transition-colors`}>
            About
          </Link>
          <Link href="/blog" className={`hover:${theme === 'dark' ? 'text-nebula' : 'text-accent'} transition-colors`}>
            Blog
          </Link>
          <Link href="/spoken-word" className={`hover:${theme === 'dark' ? 'text-nebula' : 'text-accent'} transition-colors`}>
            Spoken Word
          </Link>
          <Link href="/contact" className={`hover:${theme === 'dark' ? 'text-nebula' : 'text-accent'} transition-colors`}>
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}