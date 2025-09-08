
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SpokenWord() {
  const { theme } = useTheme();

  const poems = [
    { id: 1, title: 'Who Am I', src: '/videos/who_am_i.mp4', poster: '/posters/who_am_i.png' },
    { id: 2, title: 'Uncontained', src: '/videos/uncontained.mp4', poster: '/posters/uncontained.png' },
  ];

  return (
    <div className={`min-h-screen bg-${theme === 'dark' ? 'cosmic' : 'base-100'} p-6 flex flex-col items-center`}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`text-4xl sm:text-5xl font-bold ${theme === 'dark' ? 'text-nebula' : 'text-accent'} mb-8 text-center`}
        style={{ color: theme === 'dark' ? '#00ccff' : '#ff6b6b' }} // Explicit colors to match other pages
      >
        Spoken Word Poetry
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl"
      >
        {poems.map((poem) => (
          <motion.div
            key={poem.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: poem.id * 0.1 }}
            className={`bg-${theme === 'dark' ? 'cosmic' : 'base-200'} p-4 rounded-lg shadow-lg`}
          >
            <video
              controls
              poster={poem.poster}
              className="w-full h-48 object-cover rounded-md"
              onError={(e) => console.log(`Poetry video error for ${poem.title}:`, e.target.error)}
            >
              <source src={poem.src} type="video/mp4" />
              <source src={poem.src.replace('.mp4', '.webm')} type="video/webm" />
              <p>Video not supported. <Link href={poem.src} className={`text-${theme === 'dark' ? 'nebula' : 'accent'} underline`}>Download</Link>.</p>
            </video>
            <h2 className={`text-xl ${theme === 'dark' ? 'text-base-content' : 'text-cosmic'} font-semibold mt-2 text-center`}>{poem.title}</h2>
            {process.env.NODE_ENV === 'development' && (
              <p className="text-sm text-red-500 mt-1">Debug: Check console for errors.</p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
