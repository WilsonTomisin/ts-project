import { links } from "@/utils";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "@/hooks";
function Navlinks() {
  const user = useAppSelector((state)=> state.userState.user);

  return (
    <div className=" hidden lg:flex items-center justify-center gap-x-4">
      {links.map((link)=>{
         const restrictedRoutes = link.label === 'checkout' || link.label === 'orders' ;

         // checkout and order routes do not display if not logged in.
         if (restrictedRoutes && !user) {
           return null ;
         }
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
