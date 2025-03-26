import { BellRing, ChevronDown, Search, Settings, Sun } from "lucide-react";
import { useState } from "react";
import MobileSidebar from "./Sidebar/MobileSidebar";
const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
        <div className="border-b-1 border-soft-white px-4 py-2  justify-between items-center hidden lg:flex">
            <button className="rounded border-1 border-soft-white flex items-center justify-between gap-x-2 py-1 px-2 lg:w-[400px] xl:w-[500px]">
                <Search className="size-5 text-neutral-500" />
                <input type="text" placeholder="Search..." className="w-full bg-transparent placeholder:font-bold placeholder:text-sm focus:outline-none" />
            </button>
            <div className="flex items-center gap-x-4 relative">
                <button className="cursor-pointer"><BellRing className="size-5 text-neutral-500"/></button>
                <button className="cursor-pointer"><Settings className="size-5 text-neutral-500" /></button>
                <button className="cursor-pointer"><Sun className="size-5 text-neutral-500"/></button>
                <button 
                    className="flex items-center gap-x-1 cursor-pointer border-1 border-soft-white px-2 py-1 rounded-md"
                    onClick={()=>setOpen(!open)}
                >
                    <span className="bg-[#ffD980] rounded-full size-4 flex">
                        <img src="https://api.dicebear.com/9.x/notionists/svg" />
                    </span>
                    <div className="text-sm">Luffy D. Monkey</div>
                    <ChevronDown className="size-5 text-neutral-500"/>
                </button>
                <div className={`absolute  text-sm right-0 top-8 bg-gray px-1.5 py-2 ${open ? 'block' : 'hidden'}`}>
                    Lorem ipsum dolor sit amet
                </div>
            </div>
        </div>

        <MobileSidebar />

    </>
  )
}

export default Navbar