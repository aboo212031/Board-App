import { Badge } from "@/components/ui/badge"
import { Pencil } from "lucide-react";
import Image from "next/image";

export default function HeadingCard() {
  return (
    <div className="flex flex-col gap-2 p-6">
        <div className="flex gap-2">
            <p className="text-4xl">Sports Xi Project</p>
            <Badge variant="default" className="bg-[#FFA800] text-black">In progress</Badge>
        </div>
        <p className=" text-[#B1B5C3]">Event Production</p>
        <div className="flex gap-2">
          <p className="text-[#B1B5C3]">assigned</p>
          <div className="flex items-center relative">
            <Image
              className="z-10 -ml-0"
              aria-hidden
              src="/User profile.png"
              alt="Profile 1"
              width={32}
              height={32}
            />
            <Image
              className="z-20 -ml-4"
              aria-hidden
              src="/User profile.png"
              alt="Profile 2"
              width={32}
              height={32}
            />
            <Image
              className="z-30 -ml-4"
              aria-hidden
              src="/User profile.png"
              alt="Profile 3"
              width={32}
              height={32}
            />
            <Image
              className="z-40 -ml-4"
              aria-hidden
              src="/Group 7.png"
              alt="Profile 3"
              width={32}
              height={32}
            />
          </div>
          <div className="flex gap-2 text-[#B1B5C3] border rounded-3xl items-center p-2">
            <p>Manage</p>
            <Pencil size={16}/>
          </div>
        </div>
        <hr className="w-full"></hr>
        <div className="text-[#B1B5C3]">last updated on: 04 April, 2022</div>
    </div>
  );
}