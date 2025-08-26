import Link from 'next/link';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-cosmic shadow-2xl p-6 flex items-center justify-between sticky top-0 z-50 animate-slide-down" style={{ background: 'linear-gradient(135deg, var(--cosmic) 0%, #2a2a5d 70%, var(--background) 100%)' }}>
      <div className="flex items-center gap-6">
        <div className="text-2xl font-bold text-nebula animate-nebula-glow">Gambino’s Universe</div>
        <label htmlFor="mobile-menu" className="btn btn-circle btn-md md:hidden swap swap-rotate hover-glow" aria-label="Toggle menu">
          <input type="checkbox" id="mobile-menu" className="hidden peer" />
          <svg className="fill-current swap-off" width="32" height="32" viewBox="0 0 512 512">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"></path>
          </svg>
          <svg className="fill-current swap-on" width="32" height="32" viewBox="0 0 512 512">
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"></polygon>
          </svg>
        </label>
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-base-content text-lg hover:text-nebula transition-colors duration-300 font-semibold hover-glow animate-pulse-slow">Home</Link>
          <Link href="/bio" className="text-base-content text-lg hover:text-nebula transition-colors duration-300 font-semibold hover-glow animate-pulse-slow">Bio</Link>
          <Link href="/blog" className="text-base-content text-lg hover:text-nebula transition-colors duration-300 font-semibold hover-glow animate-pulse-slow">Blog</Link>
          <Link href="/contact" className="text-base-content text-lg hover:text-nebula transition-colors duration-300 font-semibold hover-glow animate-pulse-slow">Contact</Link>
        </div>
      </div>
      <div className="md:hidden">
        <input type="checkbox" id="mobile-menu" className="hidden peer" />
        <div className="hidden peer-checked:flex flex-col gap-4 absolute top-20 left-0 w-full bg-cosmic p-6 shadow-2xl z-50" style={{ background: 'linear-gradient(135deg, var(--cosmic) 0%, #2a2a5d 70%, var(--background) 100%)' }}>
          <Link href="/" className="text-base-content text-lg hover:text-nebula transition-colors duration-300 font-semibold hover-glow">Home</Link>
          <Link href="/bio" className="text-base-content text-lg hover:text-nebula transition-colors duration-300 font-semibold hover-glow">Bio</Link>
          <Link href="/blog" className="text-base-content text-lg hover:text-nebula transition-colors duration-300 font-semibold hover-glow">Blog</Link>
          <Link href="/contact" className="text-base-content text-lg hover:text-nebula transition-colors duration-300 font-semibold hover-glow">Contact</Link>
        </div>
      </div>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="btn btn-outline btn-md text-nebula hover:scale-110 transition-transform duration-300 shadow-lg hover-glow animate-nebula-glow"
        aria-label="Toggle dark mode"
      >
        {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </nav>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });