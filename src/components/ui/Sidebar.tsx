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
    <div className="fixed left-0 top-0 h-screen w-72 bg-white/20 backdrop-blur-xl border-r border-gray-200 flex flex-col p-6 gap-6 shadow-xl rounded-tr-3xl rounded-br-3xl">
      {/* Logo */}
      <div
        className="flex items-center gap-2 text-2xl font-bold text-purple-600 cursor-pointer hover:text-purple-800 transition"
        onClick={() => setSelectedCategory("all")}
      >
        <Logo size="xl" />
        Braino
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-3 mt-8">
        <SidebarItem
          text="All Content"
          icon={<Logo size="lg" />}
          onClick={() => setSelectedCategory("all")}
        />
        <SidebarItem
          text="Twitter"
          icon={<Tweeticon size="lg" />}
          onClick={() => setSelectedCategory("twitter")}
        />
        <SidebarItem
          text="Youtube"
          icon={<Youtubeicon size="lg" />}
          onClick={() => setSelectedCategory("youtube")}
        />
      </div>
    </div>
  );
}
