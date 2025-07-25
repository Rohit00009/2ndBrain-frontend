import { DeleteIcon } from "../../icons/Deleteicon";
import { DocumentIcon } from "../../icons/Documenticon";
import { ShareIcon } from "../../icons/Shareicon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube" | "instagram";
}

export function Card({ title, link, type }: CardProps) {
  return (
    <div>
      <div className="p-4 bg-white rounded-md shadow-md border-slate-100 border max-w-72 min-h-48 min-w-72">
        <div className="flex justify-between">
          <div className="flex items-center text-md">
            <div className="pr-2 text-gray-500  ">
              <DocumentIcon size={"md"} />
            </div>
            {title}
          </div>
          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
              <a href={link} target="_blank">
                <ShareIcon size={"md"} />
              </a>
            </div>
            <div className=" text-gray-500">
              <DeleteIcon size={"md"} />
            </div>
          </div>
        </div>
        <div className="pt-4">
          {type === "youtube" && (
            <iframe
              className="w-full rounded-xl"
              src={link.replace("watch", "embed").replace("?v=", "/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {type == "twitter" && (
            <blockquote className="twitter-tweet ">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}
