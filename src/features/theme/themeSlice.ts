import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { applyTheme } from '@/utils';

export type Theme = 'light'| 'dark'| 'system' ;

type ThemeState ={
    theme: Theme
}

const getThemeFromStorage=():Theme=>{
    const storedTheme = (localStorage.getItem('theme') as Theme) || 'system' // <--- this asserts that the variable has a type of 'Theme' and adds a default value of 'system' if there's nothing in the local storage.
    applyTheme(storedTheme);
    return storedTheme
}

const initialState:ThemeState = {
    theme: getThemeFromStorage() 
}

const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        setTheme:(state, action:PayloadAction<Theme>)=>{
            state.theme == action.payload;
            applyTheme(action.payload)
            localStorage.setItem('theme', action.payload)
        }
    }

})
export const { setTheme } = themeSlice.actions
export default themeSlice.reducer;