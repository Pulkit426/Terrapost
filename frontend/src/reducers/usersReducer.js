import { createSlice } from '@reduxjs/toolkit'
import blogService from '../services/blogs'
import loginService from '../services/login'
import userService from '../services/users'
import { setNotification } from './notificationReducer'

const loggedInUserJSON = JSON.parse(
    window.localStorage.getItem('loggedUser'),
  )
  
  const initialState = loggedInUserJSON ? loggedInUserJSON : null

const usersSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser(state,action){
            console.log('INSIDE SETUSERS')
            state = action.payload
            return state
        },

        appendUser(state,action){
            const user= action.payload

            return state.concat(user)
        },

        setToken(state,action){
            console.log('INSIDE SETTOKEN')
            const user = action.payload
            blogService.setToken(user.token)
        }
    }
})

export const {setUser, appendUser, setToken} = usersSlice.actions

export const initializeUser = () => {
    return async dispatch => {
    const loggedUser = window.localStorage.getItem("loggedUser");
    console.log("LOGGED USER", loggedUser)
    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      dispatch(setUser(user))
      blogService.setToken(user.token);
    }
    }
}

export const login = (username, password) => {
    return async dispatch => {
        try{
      const userLogged = await loginService.login({ username, password });
      window.localStorage.setItem("loggedUser", JSON.stringify(userLogged));
      console.log("INSIDE LOGIN", userLogged)
      dispatch(setUser(userLogged))
      dispatch(setToken(userLogged))
      dispatch(setNotification(`${userLogged.username} successfully logged in`))
    }catch(error){
        dispatch(setNotification(`Wrong Username or Password`))
    }
}
}

export const signUp = (name, username, password) => {
    return async dispatch => {
        try{
            const newUser = await userService.signUp({name,username,password})
            dispatch(setNotification('Account Made successfully'))
        }
        catch(error){
            dispatch(setNotification(`${error.response.data.error}`))
        }
    }
}

export const logout = () => {
    return async dispatch => {
        dispatch(setUser(null))
        blogService.setToken(null);
    }
}

export default usersSlice.reducer