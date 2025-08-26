  import '../styles/globals.css';
  import { useEffect, useState } from 'react';
  import { useRouter } from 'next/router';
  import { ThemeProvider } from 'next-themes';
  import Layout from '@/components/Layout';
  import { motion, AnimatePresence } from 'framer-motion';

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
            <motion.div
              className="w-24 h-24 rounded-full border-8 border-nebula border-t-transparent animate-spin"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        )}
        <Layout>
          <AnimatePresence mode="wait">
            <motion.div
              key={router.asPath}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="min-h-screen"
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    );
  }

  export default MyApp;