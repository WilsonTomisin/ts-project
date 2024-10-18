import { formatAsDollars } from '@/utils';
import { useAppDispatch } from '@/hooks';
import { Button } from './ui/button';
import { updateCart, deleteFromCart } from '@/features/cart/cartSlice';
import SelectProductAmount from './SelectProductAmount';
import { Mode } from './SelectProductAmount';

export const FirstColumn = ({image, title}: {image:string; title:string;}) => {
  return (
    <img src={image} alt={title} className=' h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover'/>
  )
}

export const SecondColumn = ({title,company,color}:{title:string; company:string; color:string;}) => {
    return (
      <div className=' sm:ml-4 md:ml-12 sm:w-48'>
        <h3 className=' capitalize font-medium'>{title}</h3>
        <h4 className=' mt-2 capitalize text-sm'>{company}</h4>
        <p className=' mt-4 text-sm capitalize flex items-center gap-x-2'>
            color: <span key={color} className={`rounded-full w-5 h-5 mr-2`} style={{ backgroundColor: color }}/>

        </p>
        
      </div>
    )
  }

export const ThirdColumn = ({cartID, Amount}: {cartID:string; Amount:number;}) => {
    const dispatch = useAppDispatch();

    const deleteItemFromCart = ()=> dispatch(deleteFromCart(cartID))
    const setAmount = (value:number)=> dispatch(updateCart({cartID,Amount:value})) 
    return (
      <div>
        <SelectProductAmount mode={Mode.CartItem} amount={Amount} setAmount={setAmount}/>
        <Button variant={'link'} onClick={deleteItemFromCart}>
            remove
        </Button>
      </div>
    )
}

export const FourthColumn = ({price}:{price:string}) => {
    return (
      <div className=' font-medium sm:ml-auto'>{formatAsDollars(price)}</div>
    )
}
