import { useAppSelector } from '@/hooks';
import { CartItemsList, Sectiontitle, CartItemsTotal } from '@/components';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';


const Cart = () => {
  const user = useAppSelector((state)=> state.userState.user) ;
  const numberOfItemsInCart = useAppSelector((state)=> state.cartState.numItemsInCart)

  if (numberOfItemsInCart == 0) {
    return <Sectiontitle text='Empty Cart...'/>
  }
  return (
    <>
      <Sectiontitle text='Shopping cart'/>
      <div className=' flex gap-8 mt-8  justify-between flex-col lg:flex-row'>
        <div className=' w-full lg:w-[70%] '>
          <CartItemsList/>
        </div>
        <div className=' w-full lg:w-[30%]  lg:pl-4 '>
          <CartItemsTotal/>
          { user ?
            <Button className=' w-full mt-8' size={'lg'} asChild>
              <Link to={'/checkout'}>
                Proceed to checkout..
              </Link>
            </Button> 
            : <Button asChild className=' w-full mt-8' size={'lg'} >
                <Link to={'/login'}>
                  Please login to proceed...
                </Link>
              </Button>}
        </div>
      </div>
    </>
  )
}

export default Cart
