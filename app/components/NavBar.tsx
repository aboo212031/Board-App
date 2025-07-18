"use client";

import { useTaskStore } from "@/app/store/useTaskStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, SlidersHorizontal } from "lucide-react";
import Image from "next/image";

export default function NavBar() {
  const setSearch = useTaskStore((s) => s.setSearch);

  return (
    <div className="w-full fixed top-0 p-5 flex justify-between border border-b">
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
                <Input type="text" placeholder="Search Tasks..." className="border-0 shadow-none" onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <div className="flex items-center gap-4">
                <SlidersHorizontal size={16} />
                <Image
                    aria-hidden
                    src="/Notification Bell.png"
                    alt="Globe icon"
                    width={20}
                    height={20}
                />
                <Image
                    aria-hidden
                    src="/User profile.png"
                    alt="Globe icon"
                    width={20}
                    height={20}
                />
            </div>
          </div>
    </div>
  );
}