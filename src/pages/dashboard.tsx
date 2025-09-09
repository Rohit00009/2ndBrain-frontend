import { useEffect, useState, useMemo } from "react";
import "../App.css";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CreateContentModel } from "../components/ui/CreateContentModel";
import { PlusIcon } from "../icons/Plusicon";
import { ShareIcon } from "../icons/Shareicon";
import { Sidebar } from "../components/ui/Sidebar";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Dashboard() {
  const [modelOpen, setModelOpen] = useState(false);
  const { contents, refresh } = useContent();
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    refresh();
  }, [modelOpen]);

  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  const filteredContents = useMemo(
    () =>
      contents.filter(
        ({ type }) =>
          selectedCategory === "all" ||
          type.toLowerCase() === selectedCategory.toLowerCase()
      ),
    [contents, selectedCategory]
  );

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar setSelectedCategory={setSelectedCategory} />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6 pt-24 md:pt-6 md:ml-72">
        <CreateContentModel
          open={modelOpen}
          onclose={() => setModelOpen(false)}
        />

        {/* Top Buttons */}
        <div className="flex justify-end gap-2 mb-6 relative z-20 flex-wrap">
          <Button
            onClick={() => setModelOpen(true)}
            startIcon={<PlusIcon size={"md"} />}
            variant="primary"
            text="Add content"
            size="md"
          />
          <Button
            onClick={async () => {
              try {
                const response = await axios.post(
                  `${BACKEND_URL}/api/v1/brain/share`,
                  { share: true },
                  { headers: { Authorization: localStorage.getItem("token") } }
                );
                const hash = response.data.hash;
                const shareUrl = `${window.location.origin}/share/${hash}`;
                await navigator.clipboard.writeText(shareUrl);
                alert("Link copied:\n" + shareUrl);
              } catch (error) {
                console.error(error);
                alert("Failed to generate share link.");
              }
            }}
            startIcon={<ShareIcon size={"md"} />}
            variant="secondary"
            text="Share Brain"
            size="md"
          />
          <Button
            onClick={handleLogout}
            variant="secondary"
            text="Logout"
            size="md"
          />
        </div>

        {/* Saved Posts */}
        <div className="flex gap-4 flex-wrap mt-4">
          {filteredContents.map(({ id, type, link, title }) => (
            <div
              key={id || link}
              className="flex-1 min-w-[250px] max-w-[400px]"
            >
              <Card
                key={`${id || link}-${type}-${link}`}
                type={type}
                link={link}
                title={title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
