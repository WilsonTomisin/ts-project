import { createSlice, PayloadAction} from '@reduxjs/toolkit';
type InitThemeState ={
    name: string;
}
const initialState:InitThemeState ={
    name:'theme state'
}

const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{}

})

export default themeSlice.reducer;