import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, Settings, SlidersHorizontal, ToolCase, TowerControl, UtilityPole } from "lucide-react";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="w-full fixed top-0 p-5 flex justify-between">
        <Image
            aria-hidden
            src="/Frame 9.png"
            alt="Globe icon"
            width={97.6}
            height={12}
          />
          <div className="flex gap-4">
            <Button variant="default" className="bg-[#3772FF] text-white">Create New Board +</Button>
            <div className="flex items-center bg-[#F4F5F6] rounded-lg px-2">
                <SearchIcon size={16}/>
                <Input type="email" placeholder="Search Tasks..." className="border-0 shadow-none"/>
            </div>
            <div className="flex items-center gap-4">
                <SlidersHorizontal size={16} />
                <Image
                    aria-hidden
                    src="/Notification Bell.png"
                    alt="Globe icon"
                    width={16}
                    height={16}
                />
                <Image
                    aria-hidden
                    src="/User profile.png"
                    alt="Globe icon"
                    width={16}
                    height={16}
                />
            </div>
          </div>
    </div>
  );
}