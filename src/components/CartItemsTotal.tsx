import { useAppSelector } from '@/hooks';
import { formatAsDollars } from '@/utils';
import { Card, CardTitle } from '@/components/ui/card';
import { Separator } from './ui/separator';


type CartItemTotalRowProps = {
    amount: number ;
    label:string ;
    lastRow? : boolean ; 
}
const CartItemTotalRow = ({label, amount, lastRow}: CartItemTotalRowProps) =>{
    return(
        <>
            <div className=' flex justify-between text-sm'>
                <span>{label}</span>
                <span> {formatAsDollars(amount)}</span>
            </div>
            { lastRow ? null : <Separator className=' my-2'/>}
        </>

    )

}

const CartItemsTotal = ()=> {
    const {shipping, tax ,cartTotal , orderTotal} = useAppSelector((state)=> state.cartState)
  return (
    <Card className=' p-8 bg-muted'>
        <CartItemTotalRow label='Subtotal' amount={cartTotal}/>
        <CartItemTotalRow label='Shipping' amount={shipping}/>
        <CartItemTotalRow label='tax' amount={tax}/>
        <CardTitle className=' mt-8'>
            <CartItemTotalRow label='Order total' amount={orderTotal} lastRow/>
        </CardTitle>

    </Card>
  )
}



export default CartItemsTotal