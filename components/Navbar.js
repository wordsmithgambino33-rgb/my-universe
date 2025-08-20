import Link from 'next/link';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-cosmic shadow-2xl p-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <label htmlFor="mobile-menu" className="btn btn-circle btn-sm md:hidden swap swap-rotate" aria-label="Toggle menu">
          <input type="checkbox" id="mobile-menu" className="hidden peer" />
          <svg className="fill-current swap-off" width="24" height="24" viewBox="0 0 512 512">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"></path>
          </svg>
          <svg className="fill-current swap-on" width="24" height="24" viewBox="0 0 512 512">
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"></polygon>
          </svg>
        </label>
        <div className="hidden md:flex gap-6">
          <Link href="/" className="text-base-content hover:text-nebula transition-colors duration-300 font-semibold">Home</Link>
          <Link href="/bio" className="text-base-content hover:text-nebula transition-colors duration-300 font-semibold">Bio</Link>
          <Link href="/blog" className="text-base-content hover:text-nebula transition-colors duration-300 font-semibold">Blog</Link>
          <Link href="/contact" className="text-base-content hover:text-nebula transition-colors duration-300 font-semibold">Contact</Link>
        </div>
      </div>
      <div className="md:hidden">
        <input type="checkbox" id="mobile-menu" className="hidden peer" />
        <div className="hidden peer-checked:flex flex-col gap-4 absolute top-16 left-0 w-full bg-cosmic p-4 shadow-2xl z-50">
          <Link href="/" className="text-base-content hover:text-nebula transition-colors duration-300 font-semibold">Home</Link>
          <Link href="/bio" className="text-base-content hover:text-nebula transition-colors duration-300 font-semibold">Bio</Link>
          <Link href="/blog" className="text-base-content hover:text-nebula transition-colors duration-300 font-semibold">Blog</Link>
          <Link href="/contact" className="text-base-content hover:text-nebula transition-colors duration-300 font-semibold">Contact</Link>
        </div>
      </div>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="btn btn-outline btn-sm text-nebula hover:scale-105 transition-transform duration-300 shadow-md"
        aria-label="Toggle dark mode"
      >
        {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </nav>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });