import '../styles/output.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const handleStart = () => setTransitioning(true);
    const handleStop = () => setTransitioning(false);
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
      {transitioning && (
        <div className="fixed inset-0 z-50 pointer-events-none bg-cosmic/80 flex items-center justify-center transition-opacity animate-fade-in">
          <div className="w-24 h-24 rounded-full border-8 border-nebula border-t-transparent animate-spin"></div>
        </div>
      )}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;