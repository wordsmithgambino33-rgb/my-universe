import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

export default function Layout({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '2rem' }} className="animate-slide-up">
        {children}
      </main>
      <Footer />
    </>
  );
}