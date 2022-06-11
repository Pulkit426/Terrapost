import { createSlice } from "@reduxjs/toolkit";
import usersService from '../services/users'


const allUsersSlice = createSlice({
    name: 'allUsers',
    initialState: [],
    reducers: {
        setAllUsers(state,action){
            return action.payload
        }
    }
})

export const {setAllUsers} = allUsersSlice.actions

export const initializeAllUsers = () => {
    return async dispatch => {
        const allUsers = await usersService.getAll()
        dispatch(setAllUsers(allUsers))
    }
}

export default allUsersSlice.reducer