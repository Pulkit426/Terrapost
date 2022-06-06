import { AppBar,Toolbar,Stack, Typography,Button } from '@mui/material';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

const HomeNavbar = (props) => {
    return (
        
       <AppBar position='static' sx={{backgroundColor: "#e5e7eb", mb: 5,  width: "100%", height: "60px"}}>
       <Toolbar>

      <Link to='/'> <img src='/Terrapost.png' alt="Logo" style={{maxWidth: 150, margin: "1rem"}} /> </Link>  
      
         <Stack direction="row" spacing={2}>
         <Button component={Link}  underline="none" to='/blogs' >
            <Typography variant="body1" sx={{'&:hover': {color: '#14532d', fontWeight: 900 }, color: "gray",   }}> Blogs </Typography>
          </Button>

      <Button component={Link} underline="none" to='/users' >
      <Typography  variant="body1" sx={{'&:hover': {color: '#14532d', fontWeight: 900 }, color: "gray",   }}> users </Typography>
      </Button>

      </Stack>
      <Typography  component="div" style={{flex: 1}} > </Typography>
      <Stack direction="row" spacing={2}>
     <Typography variant="body1" component="div" sx={{color: "#292524", p: "0.5rem"}}>
     {props.user.name} logged in

     </Typography>
    

  <Button endIcon={<LogoutIcon />} variant="outlined" sx={{color: "#7f1d1d"}} onClick={props.handleLogout}> logout </Button>

          </Stack> 
       

      </Toolbar>
     </AppBar>

    )
}

export default HomeNavbar
