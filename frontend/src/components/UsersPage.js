import React from "react"
import {Card, AppBar,Toolbar,Stack, Typography, Table,TableContainer, TableRow, TableHead, TableBody, TableCell, Paper } from '@mui/material';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const UsersPage = ({allUsers}) => {

    const user = useSelector(state => state.user)

    if(!user){
      return <div>waiting for data fetch</div>
    }
    console.log(allUsers)


    return (
    <div> 
    
    <Typography align="center" variant="h4"> Users </Typography>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "1.5rem"}}>
      <Card sx={{width: 300}}> 
      <TableContainer component={Paper}>
 
        <Table  align="center" sx={{ width: 300 }} size="medium" >
          <TableHead>
            <TableRow>
              <TableCell align="center"> <Typography variant="body1" sx={{fontWeight: 700, fontSize: "14px"}}> USERNAME </Typography>  </TableCell>
              <TableCell align="center"> <Typography variant="body1" sx={{fontWeight: 700, fontSize: "14px"}}> BLOGS CREATED</Typography>  </TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
        {allUsers.map(user => (
        <TableRow key={user.username} >
         <TableCell component="th" scope="row" align="center" >
         <Link style={{textDecoration: "none", color: "gray"}} to={`/users/${user.id}`} > 
            <Typography  sx = {{ '&:hover': {color: '#A8E640', fontSize: "18px"} }} >{user.username} </Typography> </Link>
         </TableCell>
         <TableCell align="center">
         {user.blogs.length}
         </TableCell>
         </TableRow>
        ))}

        </TableBody>
        </Table>
        </TableContainer>

        </Card>
        </div>
      </div>
    )
}

export default UsersPage