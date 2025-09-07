import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="px-4 py-2 mb-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
    >
      ← Back
    </button>
  );
}
