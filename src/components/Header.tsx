import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { logoutUser } from '../features/user/userSlice';
import { clearCart } from '../features/cart/cartSlice';
import { toast } from '@/hooks/use-toast';

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const username = useAppSelector((state)=> state.userState.user?.username)

    const handleLogout =()=>{

        dispatch(logoutUser());
        dispatch(clearCart())
        toast({
            title:'logged out successfully'
        })
        navigate('/login')
    }
    
  return (
    <div className=" align-element flex justify-center sm:justify-end py-4">
        {
            username ? <div className=" flex items-center gap-x-2 sm:gap-x-8">
                <span className=" text-xs sm:text-sm">Hello,{username}</span>
                <Button variant={'link'} size={'sm'} onClick={()=> handleLogout()}>
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
