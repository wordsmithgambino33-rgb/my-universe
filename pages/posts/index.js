import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home = () => {
  const handleSubscribe = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    if (response.ok) {
      console.log('Subscribed with email:', email);
      e.target.reset();
    } else {
      console.error('Subscription failed:', response.status);
    }
  };

  return (
    <>
      <Head>
        <title>🔭 Gambino’s Universe</title>
        <meta name="description" content="Explore culture, finance, technology, and more with Stanley Mombera at Gambino’s Universe." />
        <meta property="og:title" content="🔭 Gambino’s Universe" />
        <meta property="og:description" content="A journey through culture, art, finance, ancient civilizations, spirituality, and technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gambinos-universe.vercel.app" />
        <meta property="og:image" content="/banner.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="w-full py-6 px-6 sm:px-12 bg-base-100/80 backdrop-blur-md fixed top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">🔭 Gambino’s Universe</h1>
          <div className="flex gap-6">
            <Link href="/" className="font-medium hover:text-accent transition-colors">Home</Link>
            <Link href="/blog" className="font-medium hover:text-accent transition-colors">Blog</Link>
            <Link href="/bio" className="font-medium hover:text-accent transition-colors">Bio</Link>
            <Link href="/contact" className="font-medium hover:text-accent transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-accent/10 to-base-100 relative overflow-hidden">
        {/* Floating Cosmic Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-nebula/20 animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-20 w-48 h-48 rounded-full bg-cosmic/20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-1/3 w-32 h-32 rounded-full bg-nebula/10 animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-cosmic/10 animate-float-slow"></div>

        {/* Main Header */}
        <header className="container mx-auto px-6 py-24 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary animate-slide-down">🔭 Welcome to Gambino’s Universe</h1>
          <p className="mt-4 text-lg text-base-content/80 max-w-3xl mx-auto animate-fade-in">
            Decoding today’s challenges while imagining tomorrow’s breakthroughs. Finance, technology, global economics, culture, and spirituality aren’t separate worlds—they’re parts of the same conversation. This is a space to explore those connections and discover meaning in the bigger picture.
          </p>
        </header>

        {/* Featured Topics */}
        <main className="container mx-auto px-6 py-12 relative z-10">
          <section className="text-center">
            <h2 className="text-3xl font-bold text-[#8B4513] mb-8 animate-slide-up">Featured Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-base-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-fade-in">
                <h3 className="text-xl font-semibold text-[#8B4513]">Finance</h3>
                <p className="mt-2 text-base-content/70">Insights on investments and economics.</p>
              </div>
              <div className="p-6 bg-base-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-fade-in delay-200">
                <h3 className="text-xl font-semibold text-[#8B4513]">Technology</h3>
                <p className="mt-2 text-base-content/70">Discover cutting-edge innovations and how they’re transforming today’s world.</p>
              </div>
              <div className="p-6 bg-base-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-fade-in delay-400">
                <h3 className="text-xl font-semibold text-[#8B4513]">Ancient Civilizations & Outer Space</h3>
                <p className="mt-2 text-base-content/70">Exploring humanity’s origins and our place in the cosmos.</p>
              </div>
            </div>
            <Link href="/blog" className="mt-8 inline-block btn btn-accent hover:scale-105 transition-transform duration-200">
              Visit my blog
            </Link>
          </section>

          {/* Subscription */}
          <section className="mt-16 p-8 bg-accent/20 rounded-2xl shadow-lg animate-fade-in">
            <h2 className="text-2xl font-bold text-primary text-center">Get in Touch</h2>
            <p className="mt-2 text-center text-base-content/80">Subscription options are available on our <Link href="/contact" className="underline">Contact page</Link>.</p>
            <form onSubmit={handleSubscribe} className="mt-6 max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full sm:w-auto flex-1"
                required
              />
              <button type="submit" className="btn btn-primary hover:scale-105 transition-transform duration-200">Subscribe</button>
            </form>
          </section>
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-8 text-center text-base-content/60 mt-12">
          <p>© 2025 Gambino’s Universe. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
