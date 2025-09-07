import { useState } from "react";
import { Logo } from "../../icons/Logo";
import { Tweeticon } from "../../icons/Tweeticon";
import { Youtubeicon } from "../../icons/Youtubeicon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar({
  setSelectedCategory,
}: {
  setSelectedCategory: (category: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile topbar with hamburger */}
      <div className="flex items-center justify-between p-4 bg-white/30 backdrop-blur-md md:hidden shadow-md">
        <div
          className="flex items-center gap-2 text-xl font-bold text-purple-600 cursor-pointer"
          onClick={() => setSelectedCategory("all")}
        >
          <Logo size="md" /> Braino
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-purple-600">
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-72 bg-white/20 backdrop-blur-xl border-r border-gray-200 flex flex-col p-6 gap-6 shadow-xl rounded-tr-3xl rounded-br-3xl
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:flex
        `}
      >
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

      {/* Overlay when sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-10 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
