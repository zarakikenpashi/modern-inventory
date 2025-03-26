import { Button, Drawer } from "@mui/material"
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import logo from '../../assets/logo.svg'
const MobileSidebar = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };

  return (
    <div className="border-b-1 border-soft-white px-4 py-2  justify-between items-center flex lg:hidden">
        <Button onClick={toggleDrawer(true)} className="p-0">
            <MenuIcon className="text-neutral-500" />
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}  sx={{
          "& .MuiDrawer-paper": {
            width: { xs: 200, sm: 240, md: 500 },
          },
        }}>
          <Sidebar />
        </Drawer>

        <img src={logo} alt="" className="w-32" />
        
        <button className="p-0.5 rounded">
          <img
            src="https://api.dicebear.com/9.x/notionists/svg"
            alt="avatar"
            className="size-8 rounded-full shrink-0 bg-[#ffD980] shadow"
          />
        </button>
        
    </div>
  )
}

export default MobileSidebar