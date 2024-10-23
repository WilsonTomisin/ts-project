import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/cart/cartSlice'
import themeReducer from '@/features/theme/themeSlice'
import userReducer from '@/features/user/userSlice'


export const store = configureStore({
    reducer:{
        userState: userReducer,
        themeState: themeReducer,
        cartState:cartReducer
    }
})

export type RootState = ReturnType < typeof store.getState>
export type DispatchType = typeof store.dispatch ;


// this type below explicitly defines the typeof 'store' !!. please note i did this because 
// we need to access the store in the login action in '/login'. because action functions cannot call hooks inside of them.
export type ReduxStore ={
    getState: ()=> RootState;
    dispatch: DispatchType
}