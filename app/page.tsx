import Image from "next/image";
import { SideBar } from "./layout/SideBar";
import { Header } from "./layout/Header";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
            
        <>
          <SideBar/>
          <Header/>
        </>
    </div>
  );
}
