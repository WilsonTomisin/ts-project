import { useAppSelector } from '@/hooks';
import { Card } from './ui/card';

import {
  FirstColumn,
  SecondColumn,
  ThirdColumn,
  FourthColumn,
} from './CartItemsColumns';

const CartItemsList = () => {
    const { cartItems } = useAppSelector((state)=>state.cartState)
  return (
    <div>
      {cartItems.map((cartItem,idx)=>{
        const { cartID ,productColor,amount, price, title,image,company} = cartItem

        return(
            <Card key={cartID} className=' flex flex-col gsp-y-4 sm:flex-row flex-wrap p-6 mb-8 '>
                <FirstColumn title={title} image={image}/>
                <SecondColumn title={title} company={company} color={productColor} />
                <ThirdColumn Amount={amount} cartID={cartID}/>
                <FourthColumn price={price}/>
            </Card>
        )
      })}
    </div>
  )
}

export default CartItemsList
