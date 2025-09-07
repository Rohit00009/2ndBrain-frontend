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
    <div className="h-screen w-screen bg-white flex justify-center items-center">
      <div className="bg-gray-100/90 backdrop-blur-md rounded-3xl shadow-2xl min-w-[400px] max-w-md p-10 flex flex-col items-center transition-transform transform hover:scale-105 duration-300">
        <Logo size="lg" className="h-16 w-16 text-purple-600 mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Create Your Account
        </h1>

        <Input ref={usernameRef} placeholder="Username" />
        <Input ref={passwordRef} placeholder="Password" />

        <div className="flex justify-center pt-6 w-full">
          <Button
            onClick={signup}
            loading={false}
            variant="primary"
            text="Sign Up"
            size={"md"}
            fullwidth={true}
          />
        </div>

        <p className="text-gray-500 text-sm mt-4">
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
