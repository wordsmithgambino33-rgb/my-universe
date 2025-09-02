
import Head from "next/head";
import Link from "next/link";

const Contact = () => {
  const handleSubscribe = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!email) return alert("Email is required!");
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        alert("Thank you for subscribing!");
        e.target.reset();
      } else {
        alert("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Head>
        <title>Contact - 🔭 Gambino's Universe</title>
        <meta name="description" content="Get in touch with Stanley Mombera at My Universe." />
      </Head>

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

        {/* Hero */}
        <header className="text-center mt-20 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-accent transition-colors hover:text-accent">Contact Me</h1>
          <p className="mt-4 text-lg text-base-content/80">Reach out for collaborations, inquiries, or just to say hello!</p>
        </header>

        {/* Form */}
        <main className="container mx-auto px-6">
          <section className="max-w-lg mx-auto bg-base-200 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 animate-fade-in">
            <form className="space-y-6">
              <input type="text" placeholder="Your Name" className="input input-bordered w-full" required />
              <input type="email" placeholder="Your Email" className="input input-bordered w-full" required />
              <textarea placeholder="Your Message" className="textarea textarea-bordered w-full h-32" required />
              <button type="submit" className="btn btn-primary w-full hover:scale-105 transition-transform duration-200">Send Message</button>
            </form>
          </section>

          <section className="mt-12 p-8 bg-accent/20 rounded-xl shadow-lg animate-fade-in">
            <h2 className="text-2xl font-bold text-accent transition-colors hover:text-accent text-align: 'center'">Stay Connected</h2>
            <p className="mt-2 text-center text-base-content/80">Subscribe to get updates from My Universe.</p>
            <form onSubmit={handleSubscribe} className="mt-6 max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input type="email" name="email" placeholder="Enter your email" className="input input-bordered w-full sm:w-auto flex-1" required />
              <button type="submit" className="btn btn-primary hover:scale-105 transition-transform duration-200">Subscribe</button>
            </form>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-base-100 shadow-inner py-8 mt-12 text-center">
          <p className="text-brown">© 2025 My Universe. All Rights Reserved.</p>
          <p className="mt-2 text-base-content">Reach out via: <a href="mailto:stanleymombera04@gmail.com">📧</a> | <a href="https://www.linkedin.com/in/stanley-mombera-87b600b2/" target="_blank" rel="noopener noreferrer">🔗</a></p>
        </footer>
      </div>
    </>
  );
};

export default Contact;