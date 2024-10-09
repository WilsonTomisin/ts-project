import { links } from "@/utils";
import { NavLink } from "react-router-dom";
function Navlinks() {
  return (
    <div className=" hidden lg:flex items-center justify-center gap-x-4">
      {links.map((link)=>{
        return(
            <NavLink to={link.href} key={link.label} className={(({isActive})=>{
                return `capitalize w-full ${isActive ? ' font-bold text-primary' :''}`
            })}>
                {link.label}
            </NavLink>
        )
      })}
    </div>
  )
}

export default Navlinks
