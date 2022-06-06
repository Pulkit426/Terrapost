import React from "react";
import PropTypes from "prop-types";
import { Button, TextField } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { signUp } from "../reducers/usersReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialValues = {
        name: '',
        username: '',
        password: '',
        confirmPassword: ''
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string(),
        username: Yup.string().min(4,"Min Length should be 4"),
        password: Yup.string().min(4, "Min Length should be 4"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched")
    })


    const handleSubmit = (value,props) => {

       const {name, username, password} = value
       dispatch(signUp(name,username,password))
       setTimeout(() => navigate('/'), 3000)
    }

    return (
        <div>
            <Formik initialValues={initialValues}  validationSchema={validationSchema} onSubmit={handleSubmit}>
                {(props) => (<Form >
            <Field as={TextField}
          sx={{m:0.1,p:1, width: 300}}
          variant="outlined"
          required
          helperText = {<ErrorMessage name="name" />}
         
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
               <PersonIcon />
              </InputAdornment>
            ),
            style: {
              height: 35,
              width: 300,
              padding: '14px',
              backgroundColor: "white",
              borderRadius: "0.5rem"
            }
          }}
          placeholder="Name"
            id="signup-name"
            type="text"
            name="name"
          />
        <div>
          <Field as={TextField}
          sx={{m:0.1,p:1,width: 300}}
          variant="outlined"
          required
          helperText = {<ErrorMessage name="username" />}
         
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
               <AccountCircleOutlinedIcon />
              </InputAdornment>
            ),
            style: {
              height: 35,
              width: 300,
              padding: '14px',
              backgroundColor: "white", 
              borderRadius: "0.5rem"
            }
          }}
          placeholder="Username"
            id="signup-username"
            type="text"
            name="username"
            
          />
        </div>
        <div>
          <Field as={TextField}
         sx={{m:0.1, p:1, width: 300}}
         InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             <LockIcon />
            </InputAdornment>
          ),
          style: {
            height: 35,
            width: 300,
            padding: '14px',
            backgroundColor: "white",
            borderRadius: "0.5rem"
          }
        }}
           required
           helperText = {<ErrorMessage name="password" />}
           variant="outlined"
           placeholder="Password"
            id="signup-password"
            type="password"
            name="password"
         
          />
        </div>
        <Field as={TextField}
         sx={{m:0.1, mb: 1, p:1,  width: 300}}
         InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             <LockIcon />
            </InputAdornment>
          ),
          style: {
            height: 35,
            width: 300,
            padding: '14px',
            backgroundColor: "white",
            borderRadius: "0.5rem"
          }
        }}
           required
           helperText = {<ErrorMessage name="confirmPassword" />}
           variant="outlined"
           placeholder="Confirm Password"
            id="signup-confirm-password"
            type="password"
            name="confirmPassword"
            
          />
        <Button id="login-button" type="submit" variant="contained" color="primary" sx= {{width: 300, height:35, '&:hover':{backgroundColor: "#A8E640"}, fontWeight: 700}}>
          Signup
        </Button>
      </Form>)}
            </Formik>
        </div>
    )
}

export default SignUpForm