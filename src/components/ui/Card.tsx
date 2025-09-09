import { useEffect, useState } from "react";
import { DeleteIcon } from "../../icons/Deleteicon";
import { DocumentIcon } from "../../icons/Documenticon";
import { ShareIcon } from "../../icons/Shareicon";

function getYouTubeEmbedUrl(link: string) {
  const match = link.match(/(?:v=|\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : "";
}

function extractInstagramCode(link: string): string {
  const match = link.match(/instagram\.com\/p\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : "";
}

interface CardProps {
  title: string;
  link: string;
  type:
    | "twitter"
    | "youtube"
    | "instagram"
    | "github"
    | "linkedin"
    | "facebook"
    | "chrome";
}

export function Card({ title, link, type }: CardProps) {
  const [currentType, setCurrentType] = useState(type.toLowerCase());

  useEffect(() => {
    setCurrentType(type.toLowerCase());
  }, [type, link]);

  useEffect(() => {
    if (currentType === "twitter" && (window as any).twttr) {
      (window as any).twttr.widgets.load();
    }
  }, [currentType, link]);

  return (
    <div className="p-4 bg-white rounded-md shadow-md border border-slate-100 w-full flex flex-col">
      <div className="flex justify-between mb-4">
        <div className="flex items-center text-md">
          <div className="pr-2 text-gray-500">
            <DocumentIcon size={"md"} />
          </div>
          {title}
        </div>
        <div className="flex items-center">
          <div className="pr-2 text-gray-500">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <ShareIcon size={"md"} />
            </a>
          </div>
          <div className="text-gray-500">
            <DeleteIcon size={"md"} />
          </div>
        </div>
      </div>

      <div key={link + currentType}>
        {currentType === "youtube" && (
          <iframe
            className="w-full aspect-video rounded-xl"
            src={getYouTubeEmbedUrl(link)}
            title={title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}

        {currentType === "twitter" && (
          <blockquote className="twitter-tweet w-full">
            <a href={link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}

        {currentType === "instagram" && (
          <iframe
            src={`https://www.instagram.com/p/${extractInstagramCode(
              link
            )}/embed`}
            className="w-full aspect-square rounded-xl"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        )}

        {["github", "linkedin", "facebook", "chrome"].includes(currentType) && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 bg-gray-100 rounded hover:bg-gray-200"
          >
            <p className="font-semibold">{title}</p>
            <p className="text-sm text-blue-600 break-all">{link}</p>
          </a>
        )}
      </div>
    </div>
  );
}
