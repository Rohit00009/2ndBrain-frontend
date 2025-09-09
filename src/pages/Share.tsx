import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Card } from "../components/ui/Card";

export function Share() {
  const { hash } = useParams();
  const [data, setData] = useState<{ username: string; content: any[] } | null>(
    null
  );
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v1/brain/${hash}`);
        setData(res.data);
      } catch (err: any) {
        setError("Invalid or expired link.");
      }
    };

    fetchContent();
  }, [hash]);

  if (error) {
    return <div className="text-center text-red-500 mt-6 text-lg">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-white font-poppins text-gray-700 flex flex-col items-center p-4">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
        Shared by {data?.username}
      </h1>

      {/* Responsive Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.content.map(({ type, link, title }, idx) => (
          <Card key={idx} type={type} link={link} title={title} />
        ))}
      </div>
    </div>
  );
}
