import Head from "next/head";
import Navbar from "../components/Navbar";
import { useCallback } from "react";
import dynamic from "next/dynamic";

let loadSlim;
try {
  loadSlim = require("@tsparticles/slim").loadSlim;
} catch (e) {
  console.error("Failed to load @tsparticles/slim:", e);
  loadSlim = () => {};
}

const Particles = dynamic(() => import("@tsparticles/react"), { ssr: false });

export default function Contact() {
  const particlesInit = useCallback(async (engine) => {
    try {
      await loadSlim(engine);
      // Custom spaceship shape (simplified triangle as placeholder)
      await engine.addShape("spaceship", async () => {
        return {
          draw: (context) => {
            context.beginPath();
            context.moveTo(0, -10);
            context.lineTo(-5, 10);
            context.lineTo(5, 10);
            context.closePath();
            context.fillStyle = "#ff6b6b"; // Reddish color for spaceship
            context.fill();
          },
        };
      });
    } catch (error) {
      console.error("Failed to initialize tsparticles or custom shape:", error);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Contact | Stanley Mombera</title>
        <meta
          name="description"
          content="Get in touch with Stanley Mombera via email or LinkedIn"
        />
      </Head>

      <Navbar />

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 150, density: { enable: true, value_area: 800 } }, // Fewer particles for balance
            color: { value: ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4"] },
            shape: { 
              type: ["circle", "star", "polygon", "spaceship"], 
              polygon: { nb_sides: 5 },
              image: { src: null } // Placeholder; use if you have a spaceship SVG
            },
            opacity: { value: 0.7, random: true, anim: { enable: true, speed: 1.5, opacity_min: 0.2, sync: false } },
            size: { value: 4, random: true, anim: { enable: true, speed: 2, size_min: 0.5, sync: false } },
            move: { 
              enable: true, 
              speed: 2, 
              direction: "top", // Spaceships move upward
              random: false, 
              straight: true, 
              out_mode: "out", 
              bounce: false 
            },
            links: { enable: false }, // Disable links for spaceship effect
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "grab" }, onClick: { enable: true, mode: "push" }, resize: true },
            modes: { grab: { distance: 200, links: { opacity: 0.5 } }, push: { quantity: 5 } },
          },
          detectRetina: true,
        }}
      />

      <main className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-cosmic to-base-300 text-base-content px-6 py-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-nebula drop-shadow-lg">
          Contact Me
        </h1>
        <p className="mb-8 text-lg text-center max-w-xl text-base-content/80">
          Got questions, feedback, or just want to connect? You can use the form
          below, or reach me directly via email or LinkedIn.
        </p>

        {/* Direct Contact Info */}
        <div className="mb-8 text-center space-y-2 text-base-content/70">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:stanleymombera04@gmail.com"
              className="text-nebula hover:underline"
            >
              stanleymombera04@gmail.com
            </a>
          </p>
          <p>
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/stanley-mombera-87b600b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-nebula hover:underline"
            >
              Stanley Mombera
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form className="w-full max-w-lg bg-base-100/90 shadow-2xl rounded-xl p-8 space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-nebula">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-nebula dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-nebula">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-nebula dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-nebula">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-nebula dark:bg-gray-700 dark:border-gray-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-nebula text-white py-3 rounded-lg hover:bg-nebula/80 transition duration-200 shadow-md"
          >
            Send Message
          </button>
        </form>
      </main>
    </>
  );
}