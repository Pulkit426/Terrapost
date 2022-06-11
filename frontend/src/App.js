// eslint-disable-next-line no-unused-vars
import './App.css'
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Blog from "./components/Blog";
import BlogForm from "./components/BlogForm";
import LoginForm from "./components/LoginForm";
import Togglable from "./components/Togglable";
import blogService from "./services/blogs";
import loginService from "./services/login";
import usersService from './services/users'
import { setNotification } from "./reducers/notificationReducer";
import { initializeBlogs, createBlog, likeBlog, deleteBlog , commentOnBlog } from './reducers/blogsReducer'
import { initializeUser, login,logout, setUser } from "./reducers/usersReducer";
import {
  BrowserRouter as Router,
  Routes, Route, Link, useMatch, useParams, useNavigate
} from "react-router-dom"

import BlogsByUser from "./components/BlogsByUser";
import DetailedBlogPost from "./components/DetailedBlogPost";
import 'fontsource-roboto'
import { Box, Button, Card } from "@mui/material";
import { Container } from '@mui/material';
import { AppBar,Toolbar,Stack, Typography, Table,TableContainer, TableRow, TableHead, TableBody, TableCell, Paper } from '@mui/material';
import SignUp from './components/SignUp';
import Notification from './components/Notification';
import LoginNavbar from './components/LoginNavbar';
import HomeNavbar from './components/HomeNavbar';
import UseAnimations from "react-useanimations";
import satisfied from 'react-useanimations/lib/loading2'
import LoginPage from './components/LoginPage';
import UsersPage from './components/UsersPage';
import { initializeAllUsers } from './reducers/allUsersReducer';


const App = () => {
  const blogs = useSelector(state => state.blogs)
  console.log(blogs)
  const user = useSelector(state => state.user)
  const notification = useSelector(state => state.notification)
  // const [allUsers, setAllUsers] = useState([])
  const allUsers = useSelector(state => state.allUsers)
   const dispatch = useDispatch()
   const navigate = useNavigate()

  const blogFormRef = useRef();

  useEffect(() => {
    dispatch(initializeBlogs())
    console.log(blogs)
  }, [dispatch]);

  useEffect(() => {
    dispatch(initializeUser())
    console.log("INSIDE USE EFFECT, user - ", user)
  }, []);

  useEffect(() => {
    dispatch(initializeAllUsers())
    console.log("INSIDE USE EFFECT, allUser - ", allUsers)
  }, []);


  // const initializeAllUsers = async () => {
  //   const users = await usersService.getAll()
  //   setAllUsers(users)
 
  // }

  // useEffect(initializeAllUsers, [])

  const handleLogout = () => {
    window.localStorage.clear();
    dispatch(logout())
    navigate('/')
  };

  const addBlog = async (newBlog) => {
    try {
      dispatch(createBlog(newBlog))
      blogFormRef.current.toggleVisibility()
    } 
    catch (error) {
      dispatch(setNotification(`${error.response.data.error}`))
      console.warn(error);
    }
  };

  const addLike = async (id) => {
    try{
      dispatch(likeBlog(id))
    }
    catch (error) {
          dispatch(setNotification(`${error.response.data.error}`))
          console.warn(error);
        }
  };

  const removeBlog = async (id) => {
    try {
      dispatch(deleteBlog(id))
      navigate('/')
    
    } 
    catch (error) {
      dispatch(setNotification(`${error.response.data.error}`))
      console.warn(error);
    }
  }

  const addComment = async (id,comment) => {
    try {
      console.log("INSIDE ADD COMMENT")
      dispatch(commentOnBlog(id,comment))
    } 
    catch (error) {
      dispatch(setNotification(`${error.response.data.error}`))
      console.warn(error);
    }
  }


  const renderBlogs = () => {
    return (
      <div>
      <Typography variant="h4" align="center" sx= {{fontWeight: 700, letterSpacing: "1px", color:"#374151"}}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}} > 
          <UseAnimations animation={satisfied}  size={50}  strokeColor="inherit" /> 
          </div>
        TerraPost
      </Typography>
        <Togglable buttonLabel="New Blog" ref={blogFormRef}>
          <BlogForm addBlog={addBlog} />
        </Togglable>
        <div id="blogListWrapper">
          {blogs.length &&
            blogs
              .slice()
              .sort((first, second) => second.likes - first.likes)
              .map((blog) => (
               <Blog
                  key={blog.id}
                  blog={blog}
                /> 
              ))}
        </div>
      </div>
    );
  };



 



  const padding = {
    "padding": 5
  }

  return (<div>

      <div> 
       {user && user.token &&
       
       <Box>
         <HomeNavbar  handleLogout={handleLogout} user={user} />
       {notification.length===0 ? "" : <Notification message={notification} />}
       </Box>

       }


      </div>
   

 <Routes>
          <Route path='/users/:userid' element = { <BlogsByUser allUsers= {allUsers} />} />
          <Route path='/blogs/:blogid' element= {<DetailedBlogPost   
                                            likeBlog={addLike} 
                                            deleteBlog={removeBlog} 
                                            commentBlog={addComment} />} />
          <Route path='/users' element={<UsersPage allUsers={allUsers} />} />
          <Route path='/' element={<div>{user && user.token ? renderBlogs() : <LoginPage />}</div>} />
          <Route path='/blogs' element={<div>{user && user.token ? renderBlogs() : <LoginPage />}</div>} />

          <Route path='/signup' element={<SignUp/>} />
      

</Routes> 



  </div>

  
  )
};

export default App;
