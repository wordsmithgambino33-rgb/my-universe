import Head from "next/head";
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

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    try {
      await loadSlim(engine);
    } catch (error) {
      console.error("Failed to initialize tsparticles:", error);
    }
  }, []);

  return (
    <>
      <Head>
        <title>🔭 Gambino's Universe</title>
        <meta
          name="description"
          content="The official site of Gambino — creativity, insights, and inspiration."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 200, density: { enable: true, value_area: 800 } },
            color: { value: ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4"] },
            shape: { type: ["circle", "star", "polygon"], polygon: { nb_sides: 5 } },
            opacity: { value: 0.7, random: true, anim: { enable: true, speed: 1.5, opacity_min: 0.2, sync: false } },
            size: { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 0.5, sync: false } },
            move: { enable: true, speed: 1.5, direction: "none", random: true, straight: false, out_mode: "bounce", bounce: true },
            links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 }
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "grab" }, onClick: { enable: true, mode: "push" }, resize: true },
            modes: { grab: { distance: 200, links: { opacity: 0.5 } }, push: { quantity: 5 } }
          },
          detectRetina: true
        }}
      />

      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-cosmic to-base-300 text-base-content px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center text-nebula drop-shadow-lg">
          Welcome to Gambino’s Universe
        </h1>
        <p className="text-lg md:text-2xl text-base-content/80 text-center max-w-3xl mb-8 animate-slide-up">
          Decoding the past, shaping the present, envisioning the future. Exploring the intersections of global finance, spirituality, and the timeless wonders of human history — welcome to Gambino’s Universe.
        </p>
        <a
          href="/blog"
          className="btn btn-primary btn-lg hover:scale-105 transition-transform duration-300 shadow-xl"
        >
          Visit the Blog
        </a>
      </main>
    </>
  );
}