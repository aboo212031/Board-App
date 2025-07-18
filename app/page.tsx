import Image from "next/image";
import HeadingCard from "./components/HeadingCard";
import SideBar from "./components/SideBar";
import Board from "./components/Board";

export default function Home() {
  return (
    <div className="flex flex-1 top-19 fixed h-full w-full">
      <SideBar />
      <div className="flex-1">
        <HeadingCard />
        <Board />
      </div>
    </div>
  );
}