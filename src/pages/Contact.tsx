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

    alert(`Thanks ${name}!
Email: ${email}
Message: ${message}`);
  }

  return (
    <div className="min-h-screen bg-white font-poppins text-gray-700 flex flex-col">
      {/* Header with Back Button */}
      <header className="w-full max-w-6xl mx-auto p-4 md:p-6 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 md:gap-3">
          <Logo size="md" className="h-6 w-6 md:h-8 md:w-8 text-purple-600" />
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
      <section className="flex-1 text-center px-4 md:px-8 lg:px-12 py-8 md:py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
          Contact Us
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
          Have questions or suggestions? We'd love to hear from you!
        </p>

        {/* Contact Card */}
        <div className="bg-gray-100/30 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 flex flex-col w-full max-w-sm md:max-w-md mx-auto gap-4">
          <Input ref={nameRef} placeholder="Your Name" />
          <Input ref={emailRef} placeholder="Your Email" />
          <Input ref={messageRef} placeholder="Your Message" />
          <div className="pt-2">
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
      <footer className="w-full bg-gray-100 text-center p-4 md:p-6 text-gray-500 text-sm md:text-base">
        © 2025 Braino – All rights reserved.
      </footer>
    </div>
  );
}
