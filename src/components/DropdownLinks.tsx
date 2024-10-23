import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { AlignLeft } from 'lucide-react';
import { Button } from './ui/button';
import { links } from '@/utils';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '@/hooks';

function DropdownLinks() {
  const user = useAppSelector((state)=> state.userState.user);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='lg:hidden '>
            <Button variant={'outline'} size={'icon'}>
                <AlignLeft/>
                <span className='sr-only'>Toggle links</span>
            </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
       align='start'
       sideOffset={25}
       className='lg:hidden w-52'>
            {links.map((link)=>{
                const restrictedRoutes = link.label === 'checkout' || link.label === 'orders' ;

                // checkout and order routes do not display if not logged in.
                if (restrictedRoutes && !user) {
                  return null ;
                }
                return <DropdownMenuItem key={link.label}>
                    <NavLink to={link.href} className={(({isActive})=>{
                        return ` capitalize w-full ${ isActive ? ' text-primary': ''}`
                    })}>
                        {link.label}
                    </NavLink>
                </DropdownMenuItem>
            })}

      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownLinks
