import { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

const Bio = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas element not found");
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Canvas context not available");
      return;
    }

    let width, height;
    let animationFrameId;
    let particles = [];

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 5 + 2,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          color: `hsl(${Math.random() * 360}, 50%, 50%)`
        });
      }
    }

    function draw(time) {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > width) p.speedX *= -1;
        if (p.y < 0 || p.y > height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Bio | Gambino’s Universe</title>
        <meta
          name="description"
          content="Learn about Stanley Mombera and the vision behind Gambino’s Universe — exploring culture, art, finance, ancient civilizations, spirituality, and the universe."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-accent/25 relative animate-fade-in">
        <div style={{ width: "100%", height: "100vh", position: "absolute", zIndex: -20 }}>
          <canvas ref={canvasRef} style={{ verticalAlign: "top" }}></canvas>
        </div>

        <div className="container flex flex-col justify-start h-screen md:justify-center px-6 md:px-0">
          <div className="absolute h-12 text-xl text-center inset-x-1/4 top-16 lg:top-64 animate-slide-down">
            <h1 className="text-lg md:text-xl font-light text-base-content/70">
              Somewhere in Ashroth, Nibiru...
            </h1>
          </div>

          <div className="p-4 mt-16 md:mt-0 bg-base-100/80 sm:p-6 rounded-md shadow-xl max-w-4xl mx-auto transform transition-all duration-500 hover:scale-[1.02]">
            <h1 className="my-4 text-3xl font-bold leading-tight md:text-5xl text-primary drop-shadow-md">
              Hi, I’m <strong>Stanley Mombera</strong>
            </h1>

            <h2 className="text-2xl leading-loose uppercase md:leading-tight dark:text-primary md:text-4xl">
              <span className="hidden md:inline">a </span>
              <span className="capitalize">Cosmic Explorer</span>
            </h2>

            <p className="text-base md:text-4xl mt-4 text-base-content/90">
              Originally from Nibiru but now on planet Earth // Malawi
            </p>

            <p className="mt-8 mb-12 max-w-xl text-lg text-base-content animate-fade-in">
              Beyond code and crunching numbers, I’m chasing the stars, decoding cultures, and unearthing the stories of ancient worlds.
            </p>

            <div className="flex justify-center mb-6">
              <Image
                src="/profile.jpg"
                alt="Stanley Mombera"
                width={150}
                height={150}
                className="rounded-full border-4 border-primary shadow-lg animate-pulse-slow"
                style={{ objectFit: "cover" }}
                onError={() => console.error("Failed to load profile.jpg")}
              />
            </div>

            <p className="mb-12 max-w-xl text-lg text-base-content animate-fade-in">
              I am a brother, grandson, uncle, and nephew. Professionally, I am a chartered accountant, financial economist, aspiring software engineer, and poet—dedicated to blending analytical expertise with creative expression.
            </p>

            <div className="flex my-4 gap-x-4">
              <button className="btn btn-primary md:btn-lg transition hover:scale-105 duration-300 shadow-lg">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Bio), { ssr: false });