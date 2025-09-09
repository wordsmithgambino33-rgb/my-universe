
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Layout({ children }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoids hydration issues

  return (
    <div className={`flex flex-col min-h-screen bg-gradient-to-br from-accent/10 to-${theme === 'dark' ? 'cosmic' : 'base-100'}`}>
      <Navbar />
      <main className="flex-grow animate-slide-up px-4 sm:px-6 md:px-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}