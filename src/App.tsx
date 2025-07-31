import { Dashboard } from "./pages/dashboard";
import { Share } from "./pages/Share";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/share/:hash" element={<Share />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
