import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Bio = () => {
  return (
    <>
      <Head>
        <title>🔭 Gambino's Universe - Bio</title>
        <meta name="description" content="Learn about Stanley Mombera, a Malawian accountant, writer, and tech enthusiast." />
        <meta property="og:title" content="🔭 My Universe - Bio" />
        <meta property="og:description" content="Discover the journey of Stanley Mombera." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gambinos-universe.vercel.app/bio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-accent/10 to-base-100 py-12 animate-fade-in">
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

        <div className="container mx-auto px-6 mt-20">
          <section className="text-center max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#87CEEB', animateSlideDown: 'true' }}>About Me</h2>
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
              I am a grandson, brother, nephew, and uncle; a spoken word poet, qualified accountant, financial economist, software engineer, and a Manchester United fan. My life has been shaped by family, curiosity, and the lessons that come from both success and loss. I am endlessly curious, always asking questions, exploring new ideas, and seeking to understand the world more deeply.
            </p>
            <p className="mt-4 text-lg text-green-600 italic">
              “I refuse to follow the rules where society tries to control people with low self-esteem.” - Kanye West
            </p>

            {/* Character Upgrades */}
            <div className="mt-8 space-y-6">
              <h3 className="text-2xl font-semibold" style={{ color: '#87CEEB' }}>Apparently, I come with free character upgrades</h3>
              <ul className="grid gap-4">
                <li className="bg-base-200 p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
                  <strong className="text-brown font-bold">Opinionated</strong> 💬 <br />
                  I’m not afraid to voice my perspective, even when it challenges the status quo. I believe in standing firm for what I think is right.
                </li>
                <li className="bg-base-200 p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
                  <strong className="text-brown font-bold">Wise</strong> 🤔 <br />
                  I take time to process things carefully, relying on reason and intellect rather than rushing into choices. Independence of thought is something I value deeply.
                </li>
                <li className="bg-base-200 p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
                  <strong className="text-brown font-bold">Down to Earth</strong> 🌍 <br />
                   No matter who I’m speaking with, I make an effort to genuinely connect. I keep myself grounded and approachable, and people appreciate that.
                </li>
                <li className="bg-base-200 p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
                  <strong className="text-brown font-bold">Thinker</strong> 🧠 <br />
                  I’m constantly exploring ideas, questioning, and reflecting. My curiosity pushes me to look deeper, not just at what is, but at what could be.
                </li>
              </ul>
            </div>

            {/* Timeline */}
            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-semibold" style={{ color: '#87CEEB' }}>Timeline</h3>
              <ul className="bg-base-200 p-6 rounded-xl shadow-lg space-y-2 list-none">
                <li><strong className="text-brown font-bold">1992</strong>: Born in Mount pleasant, Blantyre👶</li>
                <li><strong className="text-brown font-bold">2004</strong>: Ceased to be a closet poet and wrote a poem for my mum on her birthday ✍️🎉</li>
                <li><strong className="text-brown font-bold">2010-2013</strong>: Gap year-figuring out what to do 🤔</li>
                <li><strong className="text-brown font-bold">2015</strong>: Graduated with diploma in accounting 🎓💼</li>
                <li><strong className="text-brown font-bold">2016</strong>: Started my first job 💼🚀</li>
                <li><strong className="text-brown font-bold">2021</strong>: Became a Chartered accountant with ACCA 🎉📊</li>
                <li><strong className="text-brown font-bold">2022</strong>: Completed Harvard's CS50x course in Computer Science 🎓👨‍🏫</li>
                <li><strong className="text-brown font-bold">2023</strong>: Wrote my first code in Python🐍 & Java☕  💻🎉</li>
                <li><strong className="text-brown font-bold">2024</strong>: Completed my Master’s Degree in Financial Economics at the University of Manchester 🎓🤓</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Bio;