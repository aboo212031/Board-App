"use client"

import { CalendarRange, ChevronDown, ChevronRight, Info, LayoutGrid, LogOut, MessageCircleMore, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function SideBar() {
  const [dropdown, setDropdown] = useState(true);
  return (
    <div className="w-1/5 p-5 border border-r-2">
        <div className="flex gap-4 items-center justify-between border border-[#F4F5F6] rounded-lg p-2">
          <div className="flex gap-4">
            <Image
                aria-hidden
                src="/User profile.png"
                alt="Globe icon"
                width={50}
                height={50}
            />
            <div>
                <p className="text-[#B1B5C3]">workspace</p>
                <p>Root Folder</p>
            </div>
            </div>
            <div><ChevronDown size={16}/></div>
          </div>
        <div>
        </div>
        <div className="flex flex-col gap-5 mt-10 text-[#B1B5C3]">
          <div className="flex items-center gap-3">
            <LayoutGrid size={20} />
            <p>DashBoard</p>
          </div>
          <div className={`flex justify-between items-center ${dropdown ? "border rounded-sm p-2 text-[#3772FF]" : ""}`}>
            <div className="flex items-center gap-3">
              <LayoutGrid size={20} />
              <p>{dropdown ? "Boards" : "Dropdown"}</p>
            </div>
            <ChevronDown size={16} onClick={()=>setDropdown(!dropdown)}/>
          </div>
          { dropdown ? (
            <div className="flex flex-col gap-2 border p-2 rounded-sm">
            <div className="flex items-center gap-4">
              <ChevronRight size={16}/>
              <p>Create Routes</p>
            </div>
            <div className="flex items-center gap-4">
              <ChevronRight size={16}/>
              <p>Development React App</p>
            </div>
            <div className="flex items-center gap-4 text-[#3772FF]">
              <ChevronRight size={16}/>
              <p>Sports Xi Project</p>
            </div>
            <div className="flex items-center gap-4">
              <ChevronRight size={16}/>
              <p>Wordpress theme</p>
            </div>
          </div>
          ) : ""
          }
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <MessageCircleMore size={20} />
              <p>Messages</p>
            </div>
            <p className="bg-red-400 rounded-full h-6 w-6 text-center text-white">3</p>
          </div>
          <div className="flex items-center gap-3">
              <CalendarRange size={20} />
              <p>Calendar</p>
          </div>
          <div className="flex items-center gap-3">
              <User size={20} />
              <p>Team Members</p>
          </div>
        </div>
        <div className="text-[#B1B5C3] fixed bottom-0 mb-10 w-full flex flex-col gap-4">
          <div className="flex items-center gap-3">
              <Info size={20} />
              <p>Support</p>
          </div>
          <div className="flex items-center gap-3 w-1/6 h-10 bg-black rounded-sm text-white">
              <LogOut size={20} />
              <p>Logout</p>
          </div>
        </div>
    </div>
  );
}
