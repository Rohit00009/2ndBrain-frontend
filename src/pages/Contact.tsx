import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Logo } from "../icons/Logo";
import { useNavigate } from "react-router-dom";

export function Contact() {
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);

  function submitContact() {
    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const message = messageRef.current?.value || "";

    // Display all values
    alert(`Thanks ${name}!
Email: ${email}
Message: ${message}`);
  }

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
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <p className="text-gray-600 text-lg mb-8">
          Have questions or suggestions? We'd love to hear from you!
        </p>

        {/* Glassmorphism Contact Card */}
        <div className="bg-gray-100/30 backdrop-blur-md rounded-3xl shadow-xl p-8 flex flex-col max-w-md mx-auto gap-4">
          <Input ref={nameRef} placeholder="Your Name" />
          <Input ref={emailRef} placeholder="Your Email" />
          <Input ref={messageRef} placeholder="Your Message" />
          <div className="flex justify-center pt-2">
            <Button
              onClick={submitContact}
              loading={false}
              variant="primary"
              text="Send Message"
              size="md"
              fullwidth={true}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-100 text-center p-6 text-gray-500 mt-12">
        © 2025 Braino – All rights reserved.
      </footer>
    </div>
  );
}
