import { useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../../config";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

export function CreateContentModel({ open, onclose }) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        link,
        title,
        type,
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
          <div className="flex  items-center">
            <div className="bg-white opacity-100 p-4 rounded shadow-lg">
              <div className=" flex justify-end">
                <div onClick={onclose} className="cursor-pointer">
                  <CrossIcon size={"md"} />
                </div>
              </div>
              <div>
                <Input ref={titleRef} placeholder={"Title"} />
                <Input ref={linkRef} placeholder={"Link"} />
              </div>
              <div>
                <h1>Type</h1>
                <div className="flex gap-1 p-4 pl-6">
                  <Button
                    text="Youtube"
                    variant={
                      type === ContentType.Youtube ? "primary" : "secondary"
                    }
                    onClick={() => {
                      setType(ContentType.Youtube);
                    }}
                    size={"md"}
                  />
                  <Button
                    text="Twitter"
                    variant={
                      type === ContentType.Twitter ? "primary" : "secondary"
                    }
                    onClick={() => {
                      setType(ContentType.Twitter);
                    }}
                    size={"md"}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  variant="primary"
                  size={"md"}
                  text={"Submit"}
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
