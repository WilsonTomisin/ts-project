import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';


export enum Mode{
    SingleProduct = 'singleProduct',
    CartItem = 'cartItem'
}
type SingleProductAmountProps = {
    mode: Mode.SingleProduct;
    amount: number ;
    setAmount : React.Dispatch<React.SetStateAction<number>> ;
}

type CartItemAmountProps = {
    mode: Mode.CartItem;
    amount : number ;
    setAmount : (value: number)=> void
}

const SelectProductAmount = ({ mode, amount , setAmount}: SingleProductAmountProps | CartItemAmountProps) => {
    const cartItem = mode == Mode.CartItem ;
  return (
    // PS : SHADC-UN Select component valuess must be of a type 'string' hence the need to convert the numbers.
    <>
      <h2>Amount:</h2>
      <Select defaultValue={amount.toString()} onValueChange={(value)=> setAmount(Number(value))}>
        <SelectTrigger className={ cartItem ? ' w-[75px]' : ' w-[150px]'}>
            <SelectValue placeholder={amount}/>
        </SelectTrigger>
        <SelectContent>
            {Array.from({ length: cartItem ? amount + 7: 10},( _, idx)=>{
                const numberInString = (idx + 1).toString()
                return(
                    <SelectItem key={idx} value={numberInString}>
                        {numberInString}
                    </SelectItem>
                )
            })}
        </SelectContent>
      </Select>
    </>
  )
}

export default SelectProductAmount
