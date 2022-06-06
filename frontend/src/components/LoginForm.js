import React from "react";
import PropTypes from "prop-types";
import { Button, TextField } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';


const LoginForm = ({
  username,
  password,
  setUsername,
  setPassword,
  handleLogin,
}) => {


  return (
    <div>

      <form onSubmit={handleLogin}>
        <div>
          <TextField
          sx={{m:1, mb:"1px", p:1, borderRadius: "0.5rem", color:"white", width: 300}}
          variant="outlined"
          required
          size="small"
      
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
               <AccountCircleOutlinedIcon />
              </InputAdornment>
            ),
            style: {
              width: 300,
              borderRadius: "0.5rem",
              backgroundColor: "white"
            }
          }}
          placeholder="Username"
            id="username"
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          <TextField
          
         sx={{m:1,p:1, mt:"0.1rem", borderRadius: "0.5rem", width: 300}}
         size="small"
         InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             <LockIcon />
            </InputAdornment>
          ),
          style: {
            width: 300,
            backgroundColor: "white",
            borderRadius: "0.5rem"
          }
        }}
           required
           variant="outlined"
           placeholder="Password"
            id="password"
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <Button id="login-button" type="submit" variant="contained" color="primary" sx= {{width: 300,height: 40,'&:hover':{backgroundColor: "#A8E640"}, fontWeight: 700}}>
          login
        </Button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};
export default LoginForm;
