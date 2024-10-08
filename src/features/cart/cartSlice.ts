import { createSlice, PayloadAction} from '@reduxjs/toolkit';

type InitCartState ={
    name: string;
}
const initialState:InitCartState ={
    name:'cart state'
}

const cartSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{}

})

export default cartSlice.reducer;