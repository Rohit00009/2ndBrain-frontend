import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";

export function CreateContentModel({ open, onclose }) {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
          <div className="flex  items-center">
            <span className=" bg-white opacity-100  p-4 rounded">
              <div className=" flex justify-end">
                <div onClick={onclose} className="cursor-pointer">
                  <CrossIcon size={"md"} />
                </div>
              </div>
              <div>
                <Input placeholder={"Title"} />
                <Input placeholder={"Link"} />
              </div>
              <div className="flex justify-center">
                <Button
                  variant="primary"
                  size={"md"}
                  text={"Submit"}
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function Input({ onChange, placeholder }: { onChange: () => void }) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={"text"}
        className="px-4 py-2 border-slate-200 border rounded m-2"
        onChange={onChange}
      />
    </div>
  );
}
