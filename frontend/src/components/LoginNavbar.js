import { AppBar,Toolbar,Stack, Typography,Button } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginNavbar = () => {
    return (
        <AppBar position='static' sx={{backgroundColor: "#e5e7eb", mb: 3,  width: "100%", height: "60px"}}>
         <Toolbar>

         <img src='/Terrapost.png' alt="Logo" style={{maxWidth: 150, margin: "1rem", marginBottom: "1.25rem"}} />
         <Typography  component="div" style={{flex: 1}} > </Typography>
  

           <Stack direction="row" spacing={5} >
           <Button component={Link} variant="outlined" color="primary" underline="none" to='/'   sx={{'&:hover': {backgroundColor: '#A8E640', fontWeight: 900 }  }}>
              <Typography align="right" variant="body1" > Login </Typography>
            </Button>

        <Button component={Link} variant="contained" color="primary" underline="none" to='/signup' >
        <Typography  align="right" variant="body1" sx={{'&:hover': {color: "#A8E640", fontWeight: 900 } }}> SignUp </Typography>
        </Button>
        </Stack> 
  
         
 
        </Toolbar>
       </AppBar>
    )
}

export default LoginNavbar