import { createSlice, PayloadAction} from '@reduxjs/toolkit';
type InitUserState ={
    name: string;
}
const initialState:InitUserState ={
    name:'user state'
}

const userSLice = createSlice({
    name:'user',
    initialState,
    reducers:{}

})

export default userSLice.reducer;