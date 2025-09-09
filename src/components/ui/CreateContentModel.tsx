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

    if (!title || !link) return alert("Please provide title and link");

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        link,
        title,
        type: type.toLowerCase(),
      },
      {
        headers: { Authorization: localStorage.getItem("token") },
      }
    );

    onclose();
  }

  return (
    <div>
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 flex flex-col gap-4">
            {/* Close */}
            <div className="flex justify-end">
              <div onClick={onclose} className="cursor-pointer">
                <CrossIcon size={"md"} />
              </div>
            </div>

            {/* Inputs */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Input ref={titleRef} placeholder={"Title"} />
              <Input ref={linkRef} placeholder={"Link"} />
            </div>

            {/* Type Buttons */}
            <div>
              <h1 className="text-center font-semibold">Type</h1>
              <div className="flex flex-wrap gap-2 justify-center p-2">
                {Object.values(ContentType).map((ct) => (
                  <Button
                    key={ct}
                    text={ct.charAt(0).toUpperCase() + ct.slice(1)}
                    variant={type === ct ? "primary" : "secondary"}
                    onClick={() => setType(ct)}
                    size="sm"
                  />
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-center mt-2">
              <Button
                variant="primary"
                size="md"
                text="Submit"
                onClick={addContent}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
