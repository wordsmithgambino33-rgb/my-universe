
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css"; // Ensure this path is correct

const Home = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log("Subscribed with email:", email);
    e.target.reset();
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

      <div className="min-h-screen bg-gradient-to-br from-accent/10 to-base-100 relative animate-fade-in debug">
      
        <header className="container mx-auto px-6 py-12 text-center animate-slide-down" style={{ opacity: 0, transform: 'translateY(-20px)', transition: 'all 0.6s ease' }}>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">🔭 Welcome to Gambino’s Universe</h1>
          <p className="mt-4 text-lg text-base-content/80">Decoding today’s challenges while imagining tomorrow’s breakthroughs. Finance, technology, global economics, culture and spirituality aren’t separate worlds—they’re parts of the same conversation. The forces shaping our lives connect the past, the present, and the possibilities ahead. This is a space to explore those connections and discover meaning in the bigger picture..</p>
          <style>{`
            header[style] { opacity: 1; transform: translateY(0); }
          `}</style>
        </header>

        <main className="container mx-auto px-6 py-12">
          <section className="text-center">
            <h2 className="text-3xl font-bold" style={{ color: '#8B4513', opacity: 0, transform: 'translateY(-20px)', transition: 'all 0.6s ease' }}>
              Featured Topics
            </h2>
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 ${styles.featuredGrid}`} style={{ position: 'relative', minHeight: '300px' }}> {/* Added minHeight for visibility */}
              <div className="p-6 bg-base-200 rounded-lg shadow-md hover:shadow-lg animate-fade-in" style={{ opacity: 0, transition: 'opacity 0.6s ease' }}>
                <h3 className="text-xl font-semibold" style={{ color: '#8B4513' }}>Finance</h3>
                <p className="mt-2 text-base-content/70">Insights on investments and economics.</p>
              </div>
              <div className="p-6 bg-base-200 rounded-lg shadow-md hover:shadow-lg animate-fade-in" style={{ opacity: 0, transition: 'opacity 0.6s ease', transitionDelay: '0.2s' }}>
                <h3 className="text-xl font-semibold" style={{ color: '#8B4513' }}>Technology</h3>
                <p className="mt-2 text-base-content/70">Discover cutting-edge innovations and the ways they’re transforming today’s world.</p>
              </div>
              <div className="p-6 bg-base-200 rounded-lg shadow-md hover:shadow-lg animate-fade-in" style={{ opacity: 0, transition: 'opacity 0.6s ease', transitionDelay: '0.4s' }}>
                <h3 className="text-xl font-semibold" style={{ color: '#8B4513' }}>Ancient civilisations and the outerspace</h3>
                <p className="mt-2 text-base-content/70">Exploring humanity’s origins and our place in the cosmos.</p>
              </div>
            </div>
            <Link href="/blog" className="mt-8 inline-block btn btn-accent animate-fade-in" style={{ opacity: 0, transition: 'opacity 0.6s ease', transitionDelay: '0.6s' }}>
              Visit my blog
            </Link>
            <style>{`
              h2[style], div[style], a[style] { opacity: 1; transform: translateY(0); }
            `}</style>
          </section>

          <section id="subscription" className="mt-16 p-8 bg-accent/20 rounded-lg shadow-md animate-fade-in" style={{ opacity: 0, transition: 'opacity 0.6s ease', transitionDelay: '0.8s' }}>
            <h2 className="text-2xl font-bold text-primary text-center">Get in Touch</h2>
            <p className="mt-2 text-center text-base-content/80">Subscription options are available on our <Link href="/contact"><strong>Contact page</strong></Link>.</p>
            <style>{`
              #subscription[style] { opacity: 1; }
            `}</style>
          </section>
        </main>

        <footer className="container mx-auto px-6 py-8 text-center text-base-content/60 animate-fade-in" style={{ opacity: 0, transition: 'opacity 0.6s ease' }}>
          <p>© 2025 Gambino’s Universe. All Rights Reserved.</p>
          <style>{`
            footer[style] { opacity: 1; }
          `}</style>
        </footer>
      </div>
    </>
  );
};

export default Home;