import Head from "next/head";
import { useCallback, useState } from "react";
import dynamic from "next/dynamic";

let loadSlim;
try {
  loadSlim = require("@tsparticles/slim").loadSlim;
} catch (e) {
  console.error("Failed to load @tsparticles/slim:", e);
  loadSlim = () => {};
}

const Particles = dynamic(() => import("@tsparticles/react"), { ssr: false });

export default function Blog() {
  const particlesInit = useCallback(async (engine) => {
    try {
      await loadSlim(engine);
    } catch (error) {
      console.error("Failed to initialize tsparticles:", error);
    }
  }, []);

  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setImage(reader.result);
        } else {
          console.error("Failed to read image file");
        }
      };
      reader.onerror = () => console.error("Error reading image file");
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      setPosts((prevPosts) => [
        ...prevPosts,
        { title: title.trim(), content: content.trim(), image, id: Date.now() },
      ]);
      setTitle("");
      setContent("");
      setImage(null);
    } else {
      console.warn("Title and content are required");
    }
  };

  const handleReadMore = (id) => {
    const post = posts.find((p) => p.id === id);
    if (post) setSelectedPost(post);
  };

  return (
    <>
      <Head>
        <title>Blog | Gambino’s Universe</title>
        <meta
          name="description"
          content="Explore insights, ideas, and stories from Gambino’s Universe."
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
            links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "grab" }, onClick: { enable: true, mode: "push" }, resize: true },
            modes: { grab: { distance: 200, links: { opacity: 0.5 } }, push: { quantity: 5 } },
          },
          detectRetina: true,
        }}
      />

      <main className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-cosmic to-base-300 text-base-content px-4 py-8 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center text-nebula drop-shadow-lg">
          Blog
        </h1>

        {/* Post Creation Form */}
        <div className="w-full max-w-2xl bg-base-100/90 rounded-xl p-6 shadow-2xl mb-8">
          <h2 className="text-2xl font-semibold text-nebula mb-4">Create a New Post</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your blog content here..."
              className="w-full p-2 border rounded h-32"
              required
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border rounded"
            />
            <button type="submit" className="btn btn-primary w-full">
              Post
            </button>
          </form>
        </div>

        {/* Post List */}
        <div className="w-full max-w-2xl">
          <h2 className="text-2xl font-semibold text-nebula mb-4">Published Posts</h2>
          {posts.length === 0 ? (
            <p className="text-base-content/70">No posts yet. Create one above!</p>
          ) : (
            <ul className="space-y-4">
              {posts.map((post) => (
                <li key={post.id} className="bg-base-100/80 p-4 rounded shadow-md">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleReadMore(post.id);
                    }}
                    className="text-nebula hover:underline font-medium"
                  >
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Selected Post Details */}
        {selectedPost && (
          <div className="w-full max-w-2xl bg-base-100/90 rounded-xl p-6 shadow-2xl mt-8">
            <h2 className="text-2xl font-semibold text-nebula mb-2">{selectedPost.title}</h2>
            {selectedPost.image && (
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 object-cover rounded mb-4"
                onError={(e) => console.error("Image failed to load:", e)}
              />
            )}
            <p className="text-base-content/80">{selectedPost.content}</p>
            <button
              onClick={() => setSelectedPost(null)}
              className="btn btn-secondary mt-4"
            >
              Back to Posts
            </button>
          </div>
        )}
      </main>
    </>
  );
}