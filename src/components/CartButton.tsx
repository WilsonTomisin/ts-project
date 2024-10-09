import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

function CartButton() {
  const cartItems = 5
  return (
    <Button asChild variant={'outline'} size={'icon'} className=' px-1 flex items-center justify-between relative'>
      <Link to={'/cart'}>
        <ShoppingCart/>
        <span className=' w-6 h-6 rounded-full absolute text-secondary bg-primary -top-3 left-5 flex items-center justify-center text-xs'>
          {cartItems}
        </span>
      </Link>
    </Button>
  )
}

export default CartButton
