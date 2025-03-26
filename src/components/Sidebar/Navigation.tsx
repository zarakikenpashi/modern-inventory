import { House, Settings, UsersRound } from "lucide-react"
import { NavLink } from "react-router-dom"

const routes = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: House
    },
    {
        label: "Users",
        href: "/users",
        icon: UsersRound  
    },
    {
        label: "Settings",
        href: "/settings",
        icon: Settings 
    },

]

const Navigation = () => {
  return (
    <ul className="pt-4">
        {
            routes.map((item) => {
                const Icon = item.icon
                return (
                    <NavLink 
                        to={item.href} 
                        key={item.href} 
                        className={({ isActive }) =>
                            `flex justify-between items-center px-6 py-2 transition border-l-2 border-soft-white ${
                              isActive ? "bg-secondary-purple border-l-2 !border-primary-purple" : ""
                            } hover:bg-secondary-purple hover:border-l-2 hover:border-primary-purple`
                          }
                        >
                        <span className="flex items-center gap-x-2">
                            <Icon 
                                className="size-5 text-neutral-500"
                            />
                            <span>{item.label}</span>
                        </span>
                    </NavLink>
                )
            })
        }
    </ul>
  )
}

export default Navigation