import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"

const App = () => {
  return (
    <div className="h-screen">
      <div className="flex h-full w-full">
        <div className="hidden lg:block w-[240px] bg-soft-white fixed top-0 bottom-0 left-0 right-0 overflow-y-auto">
          <Sidebar />
        </div>
        <div className="lg:pl-[240px] w-full">
          <Navbar />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default App