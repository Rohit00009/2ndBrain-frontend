import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { CreateContentModel } from "./components/ui/CreateContentModel";
import { PlusIcon } from "./icons/Plusicon";
import { ShareIcon } from "./icons/Shareicon";

function App() {
  const [modelOpen, setModelOpen] = useState(true);
  return (
    <div className="p-4">
      <CreateContentModel
        open={modelOpen}
        onclose={() => {
          setModelOpen(false);
        }}
      />
      <div className="flex justify-end gap-2">
        <Button
          onClick={() => {
            setModelOpen(true);
          }}
          startIcon={<PlusIcon size={"md"} />}
          variant="primary"
          text="Add content"
          size="md"
        />
        <Button
          startIcon={<ShareIcon size={"md"} />}
          variant="secondary"
          text="Share Brain"
          size="md"
          onClick={() => {}}
        />
      </div>

      <div className="flex gap-4">
        <Card
          type="twitter"
          link="https://x.com/reown_/status/1928129257412161664"
          title={"First tweet"}
        />

        <Card
          type="youtube"
          link="https://www.youtube.com/watch?v=e_oQe-F1ixQ"
          title={"First Video"}
        />
      </div>
    </div>
  );
}

export default App;
