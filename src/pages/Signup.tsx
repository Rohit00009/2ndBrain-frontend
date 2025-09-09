import { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Logo } from "../icons/Logo";

export function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    await axios.post(BACKEND_URL + "/api/v1/signup", {
      username,
      password,
    });
    navigate("/signin");
    alert("You have signed up!");
  }

  return (
    <div className="min-h-screen w-full bg-white flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-gray-100/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col items-center transition-transform transform hover:scale-[1.02] duration-300">
        <Logo
          size="lg"
          className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-purple-600 mb-4"
        />
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          Create Your Account
        </h1>

        <div className="w-full space-y-4">
          <Input ref={usernameRef} placeholder="Username" />
          <Input ref={passwordRef} placeholder="Password" />
        </div>

        <div className="flex justify-center pt-6 w-full">
          <Button
            onClick={signup}
            loading={false}
            variant="primary"
            text="Sign Up"
            size="md"
            fullwidth={true}
          />
        </div>

        <p className="text-gray-500 text-sm mt-4 text-center">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/signin")}
            className="text-purple-600 font-semibold cursor-pointer hover:underline"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
