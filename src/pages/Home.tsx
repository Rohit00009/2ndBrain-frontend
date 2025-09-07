import { Link } from "react-router-dom";
import { Logo } from "../icons/Logo";

export function Home() {
  return (
    <div className="min-h-screen font-poppins text-gray-700 bg-white flex flex-col items-center">
      {/* Fixed Header with Glassmorphism and Rounded Capsule */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md bg-white/30 shadow-lg rounded-full">
        <div className="max-w-6xl flex justify-between items-center py-4 px-8 space-x-6">
          <div className="flex items-center gap-3">
            <Logo size="md" className="h-8 w-8 text-purple-600" />
            <span className="text-3xl font-bold text-gray-800">Braino</span>
          </div>
          <nav className="flex items-center space-x-6 text-gray-700">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/services" className="hover:underline">
              Services
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Add padding-top to avoid content under the fixed header */}
      <div className="pt-32 w-full flex flex-col items-center">
        {/* Hero Section */}
        <section className="text-center max-w-4xl p-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Navigating the Digital Landscape for Success
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Braino helps you organize important links, notes, and media content.
            Save your ideas and share them securely.
          </p>
          <Link
            to="/signup"
            className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Get Started
          </Link>
        </section>

        {/* Feature Cards */}
        <section className="max-w-6xl p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Link Management",
              desc: "Organize all your important links in one place for easy access and sharing.",
            },
            {
              title: "Notes & Media",
              desc: "Store your notes, images, and videos securely and access anytime.",
            },
            {
              title: "Shareable Links",
              desc: "Create private or public links for your content easily.",
            },
            {
              title: "Secure Authentication",
              desc: "Built with JWT auth for safe and smooth login experience.",
            },
            {
              title: "Clean UI",
              desc: "Minimalist design with a modern and professional feel.",
            },
            {
              title: "Fully Responsive",
              desc: "Looks perfect on desktop, tablet, and mobile devices.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </section>

        {/* Buy / Pricing Cards */}
        <section className="w-full max-w-6xl p-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic",
                price: "$5/mo",
                features: ["Access to links", "5 notes", "Basic support"],
                color: "bg-white/30",
              },
              {
                title: "Pro",
                price: "$15/mo",
                features: ["Unlimited links", "50 notes", "Priority support"],
                color: "bg-purple-100/30",
              },
              {
                title: "Enterprise",
                price: "$30/mo",
                features: [
                  "All features",
                  "Unlimited notes & links",
                  "Dedicated support",
                ],
                color: "bg-purple-200/30",
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`${plan.color} backdrop-blur-md rounded-3xl shadow-xl p-8 flex flex-col items-center transition transform hover:scale-105`}
              >
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
                <ul className="mb-6 space-y-2 text-gray-700">
                  {plan.features.map((feat, i) => (
                    <li key={i}>• {feat}</li>
                  ))}
                </ul>
                <Link
                  to="/signup"
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
                >
                  Buy Now
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-gray-100 text-center p-6 text-gray-500 mt-12">
          © 2025 Braino – All rights reserved.
        </footer>
      </div>
    </div>
  );
}
