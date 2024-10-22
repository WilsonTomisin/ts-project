import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { toast } from '@/hooks/use-toast';

type User ={
    username: string;
    jwt: string;
}

type InitUserState ={
    user: User | null
}

const getUserFromLocalStorage = ():User | null=>{
    const user = localStorage.getItem('user')
    if (!user) return null ;
    return JSON.parse(user)
}

const initialState:InitUserState ={
    user: getUserFromLocalStorage()
}

const userSLice = createSlice({
    name:'user',
    initialState,
    reducers:{
        loginUser : (state, action:PayloadAction<User>)=>{
            const user = action.payload;
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));

            if (user.username == 'demo user') {
                toast({
                    description:'welcome demo user' 
                })
            }
            toast({
                description:'Login successful!'
            })
        },
        logoutUser:(state)=>{
            state.user = null;
            localStorage.removeItem('user')
        }
    }

})
export const{ loginUser, logoutUser} = userSLice.actions

export default userSLice.reducer;