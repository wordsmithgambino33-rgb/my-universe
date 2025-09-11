
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SpokenWord() {
  const { theme } = useTheme();

  const videos = [
    { id: 1, title: 'Who Am I', src: '/videos/who_am_i.mp4', poster: '/posters/who_am_i.png' },
    { id: 2, title: 'Uncontained', src: '/videos/uncontained.mp4', poster: '/posters/uncontained.png' },
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-accent/10 to-${theme === 'dark' ? 'cosmic' : 'base-100'} px-4 sm:px-6 md:px-12 py-12`}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`text-4xl sm:text-5xl font-bold ${theme === 'dark' ? 'text-nebula' : 'text-accent'} text-center mb-10 animate-nebula-glow hover:${theme === 'dark' ? 'text-nebula-hover' : 'text-accent-hover'} transition-colors duration-300`}
      >
        Spoken Word
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
      >
        {videos.map((video) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: video.id * 0.1 }}
            className={`bg-${theme === 'dark' ? 'cosmic' : 'base-100'} p-4 rounded-lg shadow-2xl hover:shadow-${theme === 'dark' ? 'nebula' : 'accent'} transition-all duration-300`}
            style={{ background: theme === 'dark' ? 'linear-gradient(135deg, var(--cosmic) 0%, #2a2a5d 70%, var(--background) 100%)' : 'linear-gradient(135deg, #f0f0f5 0%, #e0e0e5 70%, #ffffff 100%)' }}
          >
            <video
              controls
              poster={video.poster}
              className="w-full h-64 object-cover rounded-md mb-4"
              onError={(e) => console.log(`Video error for ${video.title}:`, e)}
            >
              <source src={video.src} type="video/mp4" />
              <source src={video.src.replace('.mp4', '.webm')} type="video/webm" />
              <p>Your browser does not support the video tag. <Link href={video.src} className={`text-${theme === 'dark' ? 'nebula' : 'text-accent'} underline`}>Download the video</Link>.</p>
            </video>
            <h2
              className={`text-xl font-semibold text-center ${theme === 'dark' ? 'text-nebula' : 'text-accent'} hover:${theme === 'dark' ? 'text-nebula-hover' : 'text-accent-hover'} transition-colors duration-300`}
            >
              {video.title}
            </h2>
            {process.env.NODE_ENV === 'development' && (
              <p className="text-sm text-red-500">Debug: Check console for video errors.</p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}