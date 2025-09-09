import { useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../../config";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
  Instagram = "instagram",
  Github = "github",
  LinkedIn = "linkedin",
  Facebook = "facebook",
  Chrome = "chrome",
}

export function CreateContentModel({ open, onclose }) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<ContentType>(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        link,
        title,
        type: type.toLowerCase(), // Force lowercase storage
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    onclose();
  }

  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-opacity-60 backdrop-blur-sm fixed top-0 left-0 flex justify-center items-center transition-opacity duration-1000">
          <div className="flex items-center">
            <div className="bg-white opacity-100 p-4 rounded shadow-lg">
              <div className="flex justify-end">
                <div onClick={onclose} className="cursor-pointer">
                  <CrossIcon size={"md"} />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Input ref={titleRef} placeholder={"Title"} />
                <Input ref={linkRef} placeholder={"Link"} />
              </div>
              <div>
                <h1 className="flex justify-center">Type</h1>
                <div className="flex gap-1 p-4 pl-6">
                  {Object.values(ContentType).map((ct) => (
                    <Button
                      key={ct}
                      text={ct.charAt(0).toUpperCase() + ct.slice(1)}
                      variant={type === ct ? "primary" : "secondary"}
                      onClick={() => setType(ct)}
                      size="md"
                    />
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  variant="primary"
                  size="md"
                  text="Submit"
                  onClick={addContent}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
