import { Logo } from "../icons/Logo";
import { useNavigate } from "react-router-dom";

export function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-poppins text-gray-700 flex flex-col">
      {/* Header with Back Button */}
      <header className="w-full max-w-6xl mx-auto p-4 md:p-6 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 md:gap-3">
          <Logo size="md" className="h-6 w-6 md:h-8 md:w-8 text-purple-600" />
          Braino
        </h1>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="px-3 py-1.5 md:px-4 md:py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm md:text-base"
        >
          ← Back
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
          About Braino
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Braino is your ultimate tool to organize, save, and share your digital
          content efficiently. We aim to simplify your workflow, helping you
          focus on what matters most.
        </p>
      </section>

      {/* Mission / Values */}
      <section className="w-full max-w-6xl mx-auto px-4 md:px-8 pb-12 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
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
            <h3 className="text-lg md:text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-sm md:text-base">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-100 text-center p-4 md:p-6 text-gray-500 text-sm md:text-base mt-auto">
        © 2025 Braino – All rights reserved.
      </footer>
    </div>
  );
}
