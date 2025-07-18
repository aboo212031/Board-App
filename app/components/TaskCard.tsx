import { Bell, CloudLightning, Ellipsis, Link, MessageCircleMore, Zap } from "lucide-react";
import Image from "next/image";

export default function TaskCard({
  title,
  // type,
  description,
}: {
  title: string;
  // type: string;
  description: string;
}) {
  return (
    <div className="bg-white p-4 m-4 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-sm bg-red-600"></div>
          <p>Research</p>
        </div>
        <Ellipsis />
      </div>
      <p>Interview</p>
      <div className="flex gap-2">
        <Image
          className="z-10 -ml-0"
          aria-hidden
          src="/User profile.png"
          alt="Profile 1"
          width={16}
          height={16}
        />
        <div className="flex bg-[#F4F5F6] text-[#B1B5C3] border p-1">
          <Zap />
          <p className="font-medium">{title}</p>
        </div>
      </div>
      <Image
          className="z-10 -ml-0 w-full h-full p-2"
          aria-hidden
          src="/User profile.png"
          alt="Profile 1"
          width={16}
          height={16}
      />
      <hr></hr>
      <div className="flex justify-between p-1">
        <div className="flex">
          <Link />
          <p>3</p>
        </div>
        <div className="flex">
          <MessageCircleMore />
          <p>3</p>
        </div>
        <div className="flex">
          <Bell className="text-blue-400" />
          <p>Stream</p>
        </div>
      </div>
    </div>
  );
}