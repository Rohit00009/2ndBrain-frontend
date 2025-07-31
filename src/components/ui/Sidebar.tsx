import { Logo } from "../../icons/Logo";
import { Tweeticon } from "../../icons/Tweeticon";
import { Youtubeicon } from "../../icons/Youtubeicon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar({
  setSelectedCategory,
}: {
  setSelectedCategory: (category: string) => void;
}) {
  return (
    <div className="h-screen bg-white shadow-md border-slate-200 border w-72 position-fixed left-0 top-0 fixed pl-4">
      <div
        className="flex text-2xl pt-8 items-center cursor-pointer"
        onClick={() => setSelectedCategory("all")}
      >
        <div className="pr-2 text-purple-600">
          <Logo size={"xl"} />
        </div>
        Braino
      </div>

      <div className="pt-4 pl-6">
        <SidebarItem
          text="Twitter"
          icon={<Tweeticon size={"lg"} />}
          onClick={() => setSelectedCategory("twitter")}
        />
        <SidebarItem
          text="Youtube"
          icon={<Youtubeicon size={"lg"} />}
          onClick={() => setSelectedCategory("youtube")}
        />
      </div>
    </div>
  );
}
