import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function Home() {
  const [character, setCharacter] = useState("");
  const [script, setScript] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const generateContent = async () => {
    if (!character || !script) {
      alert("Please enter a character and script first!");
      return;
    }

    setLoading(true);
    setImageUrl("");
    setVideoUrl("");

    try {
      // Placeholder image generation
      const img = `https://source.unsplash.com/800x600/?${character},futuristic`;
      setImageUrl(img);

      // Placeholder video (later replace with AI video API)
      const vid = "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4";
      setVideoUrl(vid);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Try again!");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white flex flex-col items-center p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
      >
        🎧 VoiceVerse Studio
      </motion.h1>

      <div className="max-w-2xl w-full bg-gray-900/60 rounded-2xl shadow-xl p-6 border border-gray-700">
        <label className="block text-lg mb-2 font-semibold">Character Name</label>
        <input
          type="text"
          value={character}
          onChange={(e) => setCharacter(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-green-400"
          placeholder="e.g. Neo the Space Hacker"
        />

        <label className="block text-lg mb-2 font-semibold">Script / Dialogue</label>
        <textarea
          rows="4"
          value={script}
          onChange={(e) => setScript(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-400"
          placeholder="Type your AI script here..."
        ></textarea>

        <button
          onClick={generateContent}
          disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg font-bold text-lg hover:opacity-90 transition"
        >
          {loading ? "Generating..." : "Generate AI Image & Video"}
        </button>
      </div>

      {imageUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10"
        >
          <h2 className="text-2xl font-bold mb-3">Generated Image</h2>
          <img
            src={imageUrl}
            alt="Generated character"
            className="rounded-2xl shadow-lg border border-gray-700"
            width={400}
          />
        </motion.div>
      )}

      {videoUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10"
        >
          <h2 className="text-2xl font-bold mb-3">Generated Video</h2>
          <video controls width="400" className="rounded-xl border border-gray-700">
            <source src={videoUrl} type="video/mp4" />
          </video>
        </motion.div>
      )}

      <footer className="mt-16 text-gray-500 text-sm">
        Built with ❤️ by Frederick Amoako | <a href="http://bit.ly/4hzWx" className="underline">Get Virtual Card</a>
      </footer>
    </div>
  );
}
