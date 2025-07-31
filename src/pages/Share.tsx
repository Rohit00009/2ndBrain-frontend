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

  if (error)
    return <div className="text-center text-red-500 mt-4">{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">
        Shared by {data?.username}
      </h1>
      <div className="flex flex-wrap gap-4">
        {data?.content.map(({ type, link, title }, idx) => (
          <Card key={idx} type={type} link={link} title={title} />
        ))}
      </div>
    </div>
  );
}
