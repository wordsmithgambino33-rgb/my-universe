
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '2rem' }}>
        {children}
      </main>
      <Footer />
    </>
  );
}