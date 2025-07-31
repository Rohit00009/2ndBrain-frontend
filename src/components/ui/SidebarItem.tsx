import type { ReactElement, MouseEventHandler } from "react";

interface SidebarItemProps {
  text: string;
  icon: ReactElement;
  onClick?: MouseEventHandler<HTMLDivElement>; // optional click handler
}

export function SidebarItem({ text, icon, onClick }: SidebarItemProps) {
  return (
    <div
      onClick={onClick}
      className="flex items-center text-gray-700 py-2 cursor-pointer hover:bg-gray-200 rounded max-w-48 pl-4 transition-all"
    >
      <div className="pr-2">{icon}</div>
      <div>{text}</div>
    </div>
  );
}
