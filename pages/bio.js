
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Bio = () => {
  return (
    <>
      <Head>
        <title>🔭 Gambino’s Universe - Bio</title>
        <meta name="description" content="Learn about Stanley Mombera, a Malawian accountant, writer, and tech enthusiast." />
        <meta property="og:title" content="🔭 Gambino’s Universe - Bio" />
        <meta property="og:description" content="Discover the journey of Stanley Mombera." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gambinos-universe.vercel.app/bio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-linear-to-br from-accent/10 to-base-100 py-12 animate-fade-in">
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

        <div className="container mx-auto px-6 mt-20">
          <section className="text-center max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary animate-slide-down">About Me</h2>
            <p className="text-lg text-base-content leading-relaxed animate-slide-up">
              I am Stanley Mombera, an aquarius ♒ 🔮 who was dubbed "Gambino" as in the mob boss L😜L. This is my space to share my journey and insights.
            </p>
            <Image
              src="/profile.jpg"
              alt="Stanley Mombera"
              width={300}
              height={300}
              className="mx-auto mt-6 rounded-full object-cover shadow-lg animate-fade-in"
              onError={(e) => { e.target.src = "/placeholder.png"; }}
            />
            <p className="mt-4 text-lg text-base-content italic leading-relaxed">
              I am a grandson, brother, nephew, and uncle; a spoken word poet, qualified accountant, financial economist, software engineer, and Manchester United fan. My life has been shaped by family, curiosity, and the lessons that come from both success and loss. I am endlessly curious, always asking questions, exploring new ideas, and seeking to understand the world more deeply.
            </p>
            <p className="mt-4 text-lg text-green-600 italic">
              “I refuse to follow the rules where society tries to control people with low self-esteem.” - Kanye West
            </p>

            {/* Character Upgrades */}
            <div className="mt-8 space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Apparently, I come with free character upgrades</h3>
              <ul className="grid gap-4">
                <li className="bg-base-200 p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
                  <strong className="text-brown font-bold">Opinionated</strong> 💬 <br />
                  I’m not afraid to voice my perspective, even when it challenges the status quo.
                </li>
                <li className="bg-base-200 p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
                  <strong className="text-brown font-bold">Wise</strong> 🤔 <br />
                  I take time to process things carefully, relying on reason and intellect.
                </li>
                <li className="bg-base-200 p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
                  <strong className="text-brown font-bold">Down to Earth</strong> 🌍 <br />
                  No matter who I’m speaking with, I make an effort to genuinely connect.
                </li>
                <li className="bg-base-200 p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
                  <strong className="text-brown font-bold">Thinker</strong> 🧠 <br />
                  I’m constantly exploring ideas, questioning, and reflecting.
                </li>
              </ul>
            </div>

            {/* Timeline */}
            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Timeline</h3>
              <ul className="bg-base-200 p-6 rounded-xl shadow-lg space-y-2 list-decimal list-inside">
                <li><strong className="text-brown font-bold">1992</strong>: Born 🎂</li>
                <li><strong className="text-brown font-bold">2004</strong>: Ceased to be a closet poet ✍️🎉</li>
                <li><strong className="text-brown font-bold">2010-2013</strong>: Gap year figuring out what to do 🤔</li>
                <li><strong className="text-brown font-bold">2015</strong>: Graduated with diploma in accounting 🎓💼</li>
                <li><strong className="text-brown font-bold">2016</strong>: Started my first job 💼🚀</li>
                <li><strong className="text-brown font-bold">2021</strong>: Chartered accountant ACCA 🎉📊</li>
                <li><strong className="text-brown font-bold">2022</strong>: Completed CS50x Harvard 🎓👨‍🏫</li>
                <li><strong className="text-brown font-bold">2023</strong>: First code in Python & Java 💻🎉</li>
                <li><strong className="text-brown font-bold">2024</strong>: Master’s in Financial Economics 🎓💰</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Bio;
