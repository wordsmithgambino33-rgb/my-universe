
import '../styles/globals.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import Layout from '@/components/Layout';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/Home.module.css'; // Optional: Import for shared styles

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    // Initialize or retrieve visitor data from localStorage
    let visitors = JSON.parse(localStorage.getItem('visitorData')) || {
      totalVisits: 0,
      pageViews: {},
      lastVisit: new Date().toISOString(),
    };

    // Increment total visits and track page views
    const handleRouteChange = () => {
      visitors.totalVisits += 1;
      const currentPath = window.location.pathname;
      visitors.pageViews[currentPath] = (visitors.pageViews[currentPath] || 0) + 1;
      visitors.lastVisit = new Date().toISOString();
      localStorage.setItem('visitorData', JSON.stringify(visitors));
      console.log('Visitor Data:', visitors); // Debug log
    };

    // Track on initial load and route changes
    handleRouteChange();
    const handleRouteChangeComplete = () => handleRouteChange();
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    // Cleanup
    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

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