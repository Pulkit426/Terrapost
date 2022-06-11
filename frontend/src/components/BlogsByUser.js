import React from "react"
import { useParams, Link } from "react-router-dom"
import { Typography,Card,Table, TableBody, TableHead, TableRow, TableCell } from "@mui/material"
import usersService from '../services/users'
import { useSelector } from "react-redux"

  const BlogsByUser = (props) => {

  const userid = useParams().userid
  const allUsers = useSelector(state => state.allUsers)
  const detailedUser =  userid 
  ? allUsers.filter(user => user.id === userid)
  : null

    console.log("INSIDE BLOG BY USER",allUsers, detailedUser)

    if(!detailedUser){
      return <div>Waiting for fetch</div>
    }

    return (
      <div>
        <Typography align="center" variant="h4" sx={{fontSize: "24px", fontWeight: 900, color: "gray"}}> {detailedUser[0].name} </Typography>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "1.5rem"}}>
      <Card align="center" sx={{width: 300}}> 
      {detailedUser[0].blogs.length===0 
        ? <Typography align="center" variant="body1" sx={{fontSize: "18px", fontWeight: 700}}>No Blogs added yet </Typography>
        :  <Table>

          <TableHead>
            <TableRow>
              <TableCell> <Typography align="center" variant="body1" sx={{fontSize: "18px", fontWeight: 700}}>Added Blogs </Typography> </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
          {detailedUser[0].blogs.map(blog => (
          <TableRow key={blog.id}>
            <TableCell component="th" scope="row" align="center">
            <Link style={{textDecoration: "none", color: "gray"}} to={`/blogs/${blog.id}`} >
            <Typography  sx = {{ '&:hover': {color: '#A8E640', fontSize: "18px"} }} >
              {blog.title} 
            </Typography>
              </Link>
              </TableCell> 
          </TableRow>))}
            
          </TableBody>
       
       
          
        </Table>
        }

      </Card>
      </div>

      </div>

    )
  }

  export default BlogsByUser