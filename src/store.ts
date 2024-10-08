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

export type ReduxStore ={
    getState: ()=> RootState;
    dispatch: DispatchType
}