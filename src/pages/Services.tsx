import { Logo } from "../icons/Logo";
import { useNavigate } from "react-router-dom";

export function Services() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-poppins text-gray-700 flex flex-col items-center">
      {/* Header with Back Button */}
      <header className="w-full max-w-6xl p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <Logo size="md" className="h-8 w-8 text-purple-600" />
          Braino
        </h1>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          ← Back
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center max-w-4xl p-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
        <p className="text-gray-600 text-lg">
          Braino offers a variety of services to help you stay organized and
          productive.
        </p>
      </section>

      {/* Service Cards */}
      <section className="max-w-6xl p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Link Management",
            desc: "Organize your links efficiently and access them anytime.",
          },
          {
            title: "Notes & Media",
            desc: "Securely store your notes, files, and media content.",
          },
          {
            title: "Shareable Links",
            desc: "Create custom links for sharing your content with privacy control.",
          },
          {
            title: "Secure Authentication",
            desc: "Safe login experience with advanced security.",
          },
          {
            title: "Cross-Device Sync",
            desc: "Access your content across all your devices seamlessly.",
          },
          {
            title: "User Support",
            desc: "Fast and reliable support for all your questions.",
          },
        ].map((service, idx) => (
          <div
            key={idx}
            className="p-6 bg-gray-100/30 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </section>

      <footer className="w-full bg-gray-100 text-center p-6 text-gray-500 mt-12">
        © 2025 Braino – All rights reserved.
      </footer>
    </div>
  );
}
