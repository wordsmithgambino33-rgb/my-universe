
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState } from 'react'; // Correctly import useState from react
import dynamic from 'next/dynamic';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-cosmic shadow-2xl p-6 flex items-center justify-between sticky top-0 z-50 animate-slide-down" style={{ background: 'linear-gradient(135deg, var(--cosmic) 0%, #2a2a5d 70%, var(--background) 100%)' }}>
      <div className="flex items-center gap-6">
        <div className="text-2xl sm:text-3xl font-bold text-nebula animate-nebula-glow">Gambino’s Universe</div>
        
        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {['/', '/bio', '/blog', '/contact'].map((href, idx) => (
            <Link
              key={idx}
              href={href}
              onClick={handleLinkClick}
              className="text-base-content text-lg hover:text-nebula transition-colors duration-300 font-semibold hover-glow animate-pulse-slow"
            >
              {href === '/' ? 'Home' : href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none p-2 rounded-md hover:bg-accent/20 transition-colors"
          aria-label="Toggle menu"
          style={{ touchAction: 'manipulation', minWidth: '48px', minHeight: '48px' }}
        >
          <span className="block w-6 h-0.5 bg-accent mb-1"></span>
          <span className="block w-6 h-0.5 bg-accent mb-1"></span>
          <span className="block w-6 h-0.5 bg-accent"></span>
        </button>
      </div>

      {/* Theme toggle */}
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="btn btn-outline btn-md text-nebula hover:scale-110 transition-transform duration-300 shadow-lg hover-glow animate-nebula-glow"
        aria-label="Toggle dark mode"
      >
        {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
      </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-cosmic p-6 shadow-2xl z-40" style={{ background: 'linear-gradient(135deg, var(--cosmic) 0%, #2a2a5d 70%, var(--background) 100%)' }}>
          <div className="flex flex-col gap-4">
            {['/', '/bio', '/blog', '/contact'].map((href, idx) => (
              <Link
                key={idx}
                href={href}
                onClick={handleLinkClick}
                className="text-base-content text-lg hover:text-nebula transition-colors duration-300 font-semibold hover-glow"
              >
                {href === '/' ? 'Home' : href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });