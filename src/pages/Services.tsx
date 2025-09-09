import { Logo } from "../icons/Logo";
import { useNavigate } from "react-router-dom";

export function Services() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-poppins text-gray-700 flex flex-col">
      {/* Header with Back Button */}
      <header className="w-full max-w-6xl mx-auto p-4 md:p-6 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2">
          <Logo size="md" className="h-7 w-7 md:h-8 md:w-8 text-purple-600" />
          Braino
        </h1>
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
          Our Services
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Braino offers a variety of services to help you stay organized and
          productive.
        </p>
      </section>

      {/* Service Cards */}
      <section className="w-full max-w-6xl mx-auto px-4 md:px-8 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
            className="p-5 md:p-6 bg-gray-100/30 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
              {service.title}
            </h3>
            <p className="text-sm md:text-base">{service.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-100 text-center p-4 md:p-6 text-gray-500 mt-auto text-sm md:text-base">
        © 2025 Braino – All rights reserved.
      </footer>
    </div>
  );
}
