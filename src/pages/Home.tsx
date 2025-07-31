import { Link } from "react-router-dom";

export function Home() {
  return (
    <div
      className="h-screen flex justify-center items-center font-poppins bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#778da9] animate-gradientFlow bg-[length:400%_400%]"
      style={{
        backgroundImage: `linear-gradient(-45deg, var(--color-gray-100), var(--color-gray-200), var(--color-purple-300), var(--color-purple-500))`,
      }}
    >
      <style>
        {`
          :root {
            --color-gray-100: #eeeeef;
            --color-gray-200: #e6e9ed;
            --color-gray-600: #95989c;
            --color-purple-300: #e0e7fe;
            --color-purple-500: #3e38a7;
            --color-purple-600: #5046e4;
          }

          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .animate-gradientFlow {
            animation: gradientFlow 15s ease infinite;
          }

          .font-poppins {
            font-family: 'Poppins', sans-serif;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeIn {
            animation: fadeIn 1.2s ease-in-out;
          }
        `}
      </style>

      <div
        className="backdrop-blur-xl border rounded-2xl p-12 text-center shadow-lg animate-fadeIn"
        style={{
          backgroundColor: "rgba(224, 225, 221, 0.08)",
          borderColor: "rgba(255, 255, 255, 0.15)",
          color: "var(--color-gray-600)",
        }}
      >
        <h1 className="text-4xl mb-8 tracking-wide">Welcome to Braino!</h1>
        <div className="flex justify-center items-center gap-6">
          <Link
            to="/signup"
            className="px-6 py-3 rounded-md font-semibold text-lg border-2 transition-all"
            style={{
              backgroundColor: "var(--color-purple-500)",
              color: "#fff",
              borderColor: "transparent",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "#fff";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-purple-500)";
              e.currentTarget.style.borderColor = "transparent";
            }}
          >
            Signup
          </Link>
          <span className="font-bold text-lg">|</span>
          <Link
            to="/signin"
            className="px-6 py-3 rounded-md font-semibold text-lg border-2 transition-all"
            style={{
              backgroundColor: "var(--color-purple-500)",
              color: "#fff",
              borderColor: "transparent",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "#fff";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-purple-500)";
              e.currentTarget.style.borderColor = "transparent";
            }}
          >
            Signin
          </Link>
        </div>
      </div>
    </div>
  );
}
