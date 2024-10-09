import {Navlinks, Logo, DropdownLinks, CartButton, ModeToggle} from './'

const Navbar = () => {
  return (
    <nav className=' bg-muted py-4 '>
        <div className=' align-element flex items-center justify-between '>
            <Logo/>
            <DropdownLinks/>
            <Navlinks/>
            <div className=' flex items-center justify-center gap-x-2'>
                <ModeToggle/>
                <CartButton/>
            </div>

        </div>
    </nav>
  )
}

export default Navbar