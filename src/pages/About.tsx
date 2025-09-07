import { Logo } from "../icons/Logo";
import { useNavigate } from "react-router-dom";

export function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-poppins text-gray-700 flex flex-col items-center">
      {/* Header with Back Button */}
      <header className="w-full max-w-6xl p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <Logo size="md" className="h-8 w-8 text-purple-600" />
          Braino
        </h1>

        {/* Back Button on Right */}
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          ← Back
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center max-w-4xl p-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Braino</h2>
        <p className="text-gray-600 text-lg">
          Braino is your ultimate tool to organize, save, and share your digital
          content efficiently. We aim to simplify your workflow, helping you
          focus on what matters most.
        </p>
      </section>

      {/* Mission / Values */}
      <section className="max-w-6xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "Our Mission",
            desc: "To provide a simple, elegant platform for content organization and sharing.",
          },
          {
            title: "Our Vision",
            desc: "To become the most trusted digital workspace for individuals and teams.",
          },
          {
            title: "Our Values",
            desc: "Innovation, Simplicity, Security, and User-first design.",
          },
          {
            title: "Our Promise",
            desc: "Reliable, responsive, and secure service for all users.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-gray-100/30 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      <footer className="w-full bg-gray-100 text-center p-6 text-gray-500 mt-12">
        © 2025 Braino – All rights reserved.
      </footer>
    </div>
  );
}
