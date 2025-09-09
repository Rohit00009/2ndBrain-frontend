import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent() {
  const [contents, setContents] = useState<any[]>([]);

  const refresh = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
        headers: { Authorization: token },
      });

      const uniqueContents = Array.from(
        new Map(
          (response.data.content || []).map((item: any) => [item.link, item])
        ).values()
      );

      setContents(uniqueContents);
    } catch (error) {
      console.error("Failed to fetch content:", error);
    }
  };

  useEffect(() => {
    refresh();

    const interval = setInterval(refresh, 10 * 1000); // refresh every 10s

    return () => clearInterval(interval);
  }, []);

  return { contents, refresh };
}
