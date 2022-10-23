import { createSlice } from '@reduxjs/toolkit';

const userSlice=createSlice({
    name:"user",
    initialState:{
        loading:false,
        isAuth:false,
        user:{}
    },
    reducers:{
        loading:(state)=>{
            state.loading = true;
        },
        loggedIn :(state,action)=>{
            state.isAuth = true;
            state.user = action.payload;
        },
        logout:(state)=>{
            state.loading = false;
            state.isAuth = false;
            state.user = {}
        }
    }
})

export const {loading,loggedIn,logout} = userSlice.actions

export default userSlice.reducer