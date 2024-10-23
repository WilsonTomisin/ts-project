import { ActionFunction, Form, redirect } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';
import { CustomFetch, formatAsDollars, type Checkout } from '@/utils';
import { clearCart } from '../features/cart/cartSlice';
import { ReduxStore } from '@/store'
import { toast } from '@/hooks/use-toast';
import { AxiosError } from 'axios';


export const action = (store:ReduxStore):ActionFunction=>{

    return async({request}): Promise<Response | null >=>{
        const formData = await request.formData() ;

        const Name = formData.get('name') as string 
        const address = formData.get('address') as string // type assertion ( ensures that typescript sees this variable as having a value)

        if( !Name || !address){
            toast({title:'please fill all fields'})
        }
        const user = store.getState().userState.user
        if(!user){
            toast({ variant:"destructive",description:' please login first.'})
            return redirect('/login');
        }

        const { numItemsInCart, orderTotal, cartItems} = store.getState().cartState

        const CheckoutData:Checkout ={
            name: Name,
            address,
            chargeTotal: orderTotal,
            orderTotal: formatAsDollars(orderTotal),
            cartItems,
            numItemsInCart

        }
        try {
            const response = await CustomFetch.post('/orders',
                 {data: CheckoutData},  // this is because the api route will retrun an object with a data property that needs the checkoutData
                 {
                    headers:{
                        Authorization: `Bearer ${user.jwt}` // the POST request needs to be authorized hence the passing of the jwt token.
                    }
                 }
            )
            console.log(response);
            toast({title:'order created successfully!'})
            store.dispatch(clearCart());

            return redirect('/orders')
        } catch (error) {
            const errorMsg = error instanceof AxiosError ? error.response?.data.error.message : "order not successful." ;
            toast({ variant:'destructive', description:`error: ${errorMsg}`})
            
        }        

        return null ;
    }
}

const CheckOutForm = () => {

  return (
    <Form method='POST' className='flex flex-col gap-y-4'>
      <h4 className='font-medium text-xl mb-4'>Shipping Information</h4>
      <FormInput labelText='first name' name='name' type='text' />
      <FormInput labelText='address' name='address' type='text' />
      <SubmitBtn text='Place Your Order' className=' w-full mt-4' />

    </Form>
  )
}

export default CheckOutForm
