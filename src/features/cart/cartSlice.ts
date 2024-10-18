import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { CartItem, CartState } from '@/utils';
import { toast } from '@/hooks/use-toast';


const initialCartState:CartState ={
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    shipping: 200,
    tax:0,
    orderTotal: 0
}
const getCartStateFromLocalStorage = ():CartState =>{
    const storedData = localStorage.getItem('cart');
    return storedData ? JSON.parse(storedData): initialCartState;
}

const cartSlice = createSlice({
    name:'cart',
    initialState:getCartStateFromLocalStorage(),
    reducers:{
        addToCart:(state, action:PayloadAction<CartItem>)=>{
            const newCartItem = action.payload;
            const item = state.cartItems.find(cartItem => cartItem.cartID == newCartItem.cartID);
            if (item) {
                // this basically says; if the item we are about to add already exists in the cart, just add the amount
                // of the newCartItem to the amount of the existing item. 
                item.amount = item.amount + newCartItem.amount
            } else{
                state.cartItems.push(newCartItem)
            }

            // state.numItemsInCart = state.cartItems.length
            state.numItemsInCart = state.numItemsInCart + newCartItem.amount;
            state.cartTotal = state.cartTotal + Number(newCartItem.price) * newCartItem.amount;
         
            cartSlice.caseReducers.calculateTotal(state)

            toast({
                variant:'default',
                title:'Item added to cart!',
                description:` ${newCartItem.amount} ${ newCartItem.amount > 1 ? 'Products': 'Product'} has been added to your cart...`
            })
        },
        deleteFromCart: (state, action:PayloadAction<string>)=>{
            const cartIdToDelete = action.payload;
            const cartItemToDelete = state.cartItems.find(item => item.cartID == cartIdToDelete);
            // ^\ |^ returns the item in the state cart that matches the action.payload(cartIdToDelete)

            if (!cartItemToDelete) return ;
            state.cartItems = state.cartItems.filter(item => item.cartID !== cartItemToDelete.cartID )
            //^^^^^^ returns a new array of cart items excluding the one that `item.cartID !== cartItemToDelete.cartID` returns false
            state.numItemsInCart = state.numItemsInCart - cartItemToDelete.amount

            // updates the cart total by removing the total price of the item deleted.
            state.cartTotal = state.cartTotal - Number(cartItemToDelete.price) * cartItemToDelete.amount;

            // update the global state and local storage total by passing the 'state' just mutated
            cartSlice.caseReducers.calculateTotal(state);

            toast({
                variant:'destructive',
                title:'Item removed from cart!',
                description:` ${cartItemToDelete.amount} ${ cartItemToDelete.amount > 1 ? 'Products': 'Product'} have been removed from your cart...`
            })
        },
        updateCart:(state, action:PayloadAction<{cartID:string ; Amount:number}>)=>{
            const {cartID, Amount} = action.payload ;
            const cartItem = state.cartItems.find((item)=> item.cartID === cartID) ;

            if (!cartItem) return ;

            //BELOW: Updates the nuber of items in the cart by substracting the new amount (Amount) from the previous amount (cartItem.amount)
            state.numItemsInCart = state.numItemsInCart + Amount - cartItem.amount ;


            //BELOW: Updates the total price of all cart items by adding all other prices to the new price of the updated item.
            state.cartTotal = state.cartTotal + Number(cartItem.price) * (Amount - cartItem.amount)

            //  point/assign the cartItem.amount property to the new Amount
            cartItem.amount = Amount

            cartSlice.caseReducers.calculateTotal(state)
            toast({
                description:'Amount has been updated!'
            })
        },
        clearCart:()=>{
            localStorage.setItem('cart', JSON.stringify(initialCartState))
            return initialCartState
        },
        calculateTotal:(state)=>{
            state.tax = 0.05 * state.cartTotal;
            state.orderTotal = state.cartTotal + state.shipping + state.tax;
            localStorage.setItem('cart', JSON.stringify(state))
        }
    }

})

export const {addToCart , updateCart, clearCart , calculateTotal, deleteFromCart} = cartSlice.actions
export default cartSlice.reducer;