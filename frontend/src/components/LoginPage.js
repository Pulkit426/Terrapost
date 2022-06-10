import React, {useState} from 'react'
import LoginNavbar from './LoginNavbar';
import { AppBar,Toolbar,Stack, Typography, Container } from '@mui/material';
import UseAnimations from "react-useanimations";
import satisfied from 'react-useanimations/lib/loading2'
import { useSelector, useDispatch } from "react-redux";
import { setNotification } from '../reducers/notificationReducer';
import LoginForm from './LoginForm';
import { login } from "../reducers/usersReducer";
import Notification from './Notification';

const LoginPage = () => {

    const dispatch = useDispatch()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const notification = useSelector(state => state.notification)

    const handleLogin = async (event) => {
        event.preventDefault();
    
        try {
          dispatch(login(username,password))
          setUsername("");
          setPassword("");
        } catch (error) {
          dispatch(setNotification(`${error.response.data.error}`, ))
          console.warn(error);
        }
      };

    return (
        <div>
        <LoginNavbar />
         {notification.length===0 ? "" : <Notification message={notification} />}


       <Typography align="center" gutterBottom="true" variant="body1" sx={{p: "1rem", m: "1rem", color: "gray", fontSize: "1.5rem", fontWeight: 600}}>
        Log in to application
        </Typography>


        <Container maxWidth='sm' 
        sx={{backgroundColor:'#e5e7eb', width: 350, height: 375, borderRadius: "1.2rem", mb: 10,
        display: "flex", alignItems: "center", justifyContent: "center"}} >
          
          <Typography align="center" gutterBottom="true" variant="body1">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}} > <UseAnimations animation={satisfied}  size={50}  strokeColor="inherit" /> </div>
          
     
        <LoginForm
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />

<Typography variant="body1" sx={{mt:2.5, mb:0.5, color: "#475569", fontWeight: 500}}> Created by Pulkit </Typography>
        </Typography>
        </Container>
      </div>
    )
}

export default LoginPage