
import { motion } from 'framer-motion';
import { getMediumArticles } from '../lib/external';
import Link from 'next/link';

export async function getStaticProps() {
  const articles = await getMediumArticles();
  return {
    props: { articles },
    revalidate: 3600,
  };
}

export default function Blog({ articles }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/10 to-base-100 animate-fade-in">
      {/* Navbar */}
      <nav className="w-full py-6 px-6 sm:px-12 bg-base-100/80 backdrop-blur-md fixed top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-end items-center">
          <div className="flex gap-6">
            <Link href="/" className="font-medium hover:text-accent transition-colors">Home</Link>
            <Link href="/blog" className="font-medium hover:text-accent transition-colors">Blog</Link>
            <Link href="/bio" className="font-medium hover:text-accent transition-colors">Bio</Link>
            <Link href="/contact" className="font-medium hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-gradient-to-r from-cosmic to-[#2a2a5d] text-white p-16 text-center relative overflow-hidden mt-20 rounded-b-3xl shadow-lg">
        <h1 className="text-5xl md:text-6xl font-bold text-accent animate-pulse hover:text-white transition-colors">My Published Articles</h1>
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-nebula/20 animate-pulse-slow"></div>
        <div className="absolute -bottom-12 -right-12 w-72 h-72 rounded-full bg-cosmic/20 animate-pulse-slow"></div>
      </header>

      {/* Articles */}
      <main className="max-w-5xl mx-auto py-12 px-6">
        {articles.length > 0 ? (
          <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} className="grid gap-8">
            {articles.map((article, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                className="p-6 bg-base-200 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300"
              >
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-accent animate-pulse hover:text-white transition-colors hover:underline">
                  {article.title}
                </a>
                <p className="text-light-green mt-2" style={{ color: '#B03060' }}>{new Date(article.pubDate).toLocaleDateString()}</p>
              </motion.li>
            ))}
          </motion.ul>
        ) : (
          <p className="text-center text-gray-500 text-xl animate-pulse-slow mt-12">No articles found. Check back later—it may take a few hours to update.</p>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#1a1a3d] to-[#0a0a23] text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <nav className="mb-6 flex justify-center gap-6">
            <Link href="/" className="text-star-dust text-lg hover:text-nebula animate-pulse-slow">Home</Link>
            <Link href="/bio" className="text-star-dust text-lg hover:text-nebula animate-pulse-slow">Bio</Link>
            <Link href="/blog" className="text-star-dust text-lg hover:text-nebula animate-pulse-slow">Blog</Link>
            <Link href="/contact" className="text-star-dust text-lg hover:text-nebula animate-pulse-slow">Contact</Link>
          </nav>
          <p className="text-lg">© 2025 My Universe. All rights reserved.</p>
          <p className="text-lg mt-3 text-nebula animate-nebula-glow">Stay updated—subscribe for more content!</p>
        </div>
      </footer>
    </div>
  );
}