import { formatAsDollars } from '@/utils';
import { useAppDispatch } from '@/hooks';
import { Button } from './ui/button';
import { updateCart, deleteFromCart } from '@/features/cart/cartSlice';
import SelectProductAmount from './SelectProductAmount';
import { Mode } from './SelectProductAmount';

export const FirstColumn = () => {
  return (
    <div>CartItemsColumns</div>
  )
}

export const SecondColumn = () => {
    return (
      <div>CartItemsColumns</div>
    )
  }

export const ThirdColumn = () => {
    return (
      <div>CartItemsColumns</div>
    )
}

export const FourthColumn = () => {
    return (
      <div>CartItemsColumns</div>
    )
}
