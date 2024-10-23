import { useState } from "react"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import { useAppSelector } from "@/hooks"

const Header = () => {
    
    const [user, setUser] = useState<{name:string } | null>({
        name: useAppSelector((state)=> state.userState.user?.username )
    })
  return (
    <div className=" align-element flex justify-center sm:justify-end py-4">
        {
            user ? <div className=" flex items-center gap-x-2 sm:gap-x-8">
                <span className=" text-xs sm:text-sm">Hello,{user.name}</span>
                <Button variant={'link'} size={'sm'} onClick={()=> setUser(null)}>
                    Logout
                </Button>
            </div>
            : <div className=" flex items-center gap-x-2">
                <Button asChild variant={'link'} size={'sm'}>
                    <Link to={'/login'}>Sign in / Guest</Link>
                </Button>
                <Button asChild variant={'link'} size={'sm'}>
                    <Link to={'/register'}>Register</Link>
                </Button>

            </div>
        }
      
    </div>
  )
}

export default Header
