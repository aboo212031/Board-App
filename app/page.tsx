import Image from "next/image";
import HeadingCard from "./components/HeadingCard";
import SideBar from "./components/SideBar";

export default function Home() {
  return (
    <div className="flex flex-1 top-19 fixed h-full">
      <SideBar />
      <div className="flex-1 overflow-auto">
        <HeadingCard />
      </div>
    </div>
  );
}