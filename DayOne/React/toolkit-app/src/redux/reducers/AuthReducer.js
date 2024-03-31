import {createSlice} from '@reduxjs/toolkit'

export const AuthApp = createSlice({
    name:'Auth',
    initialState:{
        auth:false
    },
    reducers:{
        login:(state) =>{
            state.auth = true;
        },
        logout:(state) =>{
            state.auth = false;
        }
    }
})

export const {login,logout} = AuthApp.actions
export default AuthApp.reducer
