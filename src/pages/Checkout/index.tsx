import { useAppSelector } from '@/hooks';
import { CheckOutForm, Sectiontitle, CartItemsTotal } from '@/components';
import { LoaderFunction, redirect } from 'react-router-dom';
import { type ReduxStore } from '@/store';
import { toast} from '@/hooks/use-toast';


//  we are accessing the store in the loader function because we want to ensure that there must be user logged in 
// any time we want to access this route.
// NB: even though we ensure these routes i.e; checkout & orders are not displayed when a user is not logged in, 
// the routes can still be accessed by typing in the url, to prevent this ,the 'loader' function ensures that anytime
// we route to this page, it checks if there's a user in the store and if no user, we display a toast error message telling
// them to login.
export const loader= (store:ReduxStore):LoaderFunction=>{

  /* we are returning a function within a higher order function soo that we would have access to the redux store . */
  return async():Promise<Response | null>=>{
    const user = store.getState().userState.user ;

    if (!user) {
      toast({variant:'destructive', description:'login to continue'})
      return redirect('/login')
    }
    
    return null;
  }
}


const Checkout = () => {
  // const { toast } = useToast()
  const CartTotal = useAppSelector((state)=> state.cartState.cartTotal)

  if (CartTotal === 0) {
    return <Sectiontitle text='cart is empty'/>
  }
  return (
    <>
      <Sectiontitle text='Place your order' />
      <div className='mt-8 grid gap-8  md:grid-cols-2 items-start'>
        <CheckOutForm />
        <CartItemsTotal />
      </div>
    </>
  );
}

export default Checkout
