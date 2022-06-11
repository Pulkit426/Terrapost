import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Button, Card, CardContent, Typography, Box,Link } from "@mui/material"
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

import IconButton from '@mui/material/IconButton'
import NotesIcon from '@mui/icons-material/Notes';
import Comment from "./Comment"
import CommentForm from "./CommentForm"


  const DetailedBlogPost = (props) => {
    // const blogs = JSON.parse(window.localStorage.getItem('blogs'))
    const blogs = useSelector(state => state.blogs)
    const user = useSelector(state => state.user)
    console.log("BLOGS & USER", blogs, user)
    const blogid = useParams().blogid
    console.log("BLOGID", blogid)
  const detailedBlog = blogid
  ? blogs.find(blog => blog.id === blogid)
  : null

  console.log(detailedBlog)
  console.log("USER.USERNAME", user.username)
  console.log("BLOG.USER.USERNAME", detailedBlog.user.username)
  console.log(user.username, detailedBlog.user.username)

  const isOriginalUser = user.username === detailedBlog.user.username
  console.log(isOriginalUser)

  const cardHeight = isOriginalUser ? 300 : 250

  

    console.log("INSIDE DETAILED BLOG", blogs, detailedBlog)
    return ( 
      <div >
      <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
      
        <Card elevation={5}  sx={{ height: cardHeight, width: 600, maxWidth: 800, overflow: "auto" }} >
          <CardContent>
          <Typography variant="h5" sx={{m:1, fontWeight: 700, fontSize: "28px"}} >
            {detailedBlog.title}
            </Typography>
            <Typography variant="caption" sx={{m:1, fontWeight: 700, fontSize: "18px", color: "gray"}} >
            {detailedBlog.author}
            </Typography>
            <Typography variant="body1"  sx={{m:1, fontSize: "18px"}}>
              {detailedBlog.content}              
            </Typography> 

            <Typography variant="body2" >
              <Link href={`https://${detailedBlog.url}`} target='_blank' underline="none" sx={{m:1, fontSize: "24px", '&:hover': {textDecoration: "underline"}}} style={{cursor: "pointer"}}>{detailedBlog.url}   </Link>            
            </Typography>

            <Typography variant="body1"  sx={{m:1, fontSize: "14px", fontWeight: 400, color: "orange"}}>
            Added by
             <span style={{backgroundColor: "orange", color:"brown", fontWeight: 900, padding: 5, margin: 3}} > {detailedBlog.user.name}  </span>     
           
           <span style= {{margin :"20px", marginRight: "10px", fontWeight: 700}} >
           {detailedBlog.likes} likes
            </span>
  
            <IconButton onClick={() => props.likeBlog(detailedBlog.id)} sx={{'&:hover':{color:"blue"} }}>
            <ThumbUpAltOutlinedIcon />
            </IconButton>
            </Typography>


        <div>
        {user.username === detailedBlog.user.username && (
          <Button onClick={() => props.deleteBlog(detailedBlog.id)}
                  sx= {{m: 1, mt: 0.5}}
                  size="small"
                   startIcon={<DeleteIcon />}
                   variant="outlined"
                   color="error" >
                     <Typography> Delete </Typography>
            </Button> )}
        </div>
            
    </CardContent>

    </Card>
    </div>

    <div> 
     
     <Box sx={{ml:-13}} >

    <div style={{display:"flex", justifyContent: "center", alignItems: "center", color:"gray", marginLeft: "6rem"}}>
        <NotesIcon sx={{mt:5, mr:1}} />
        <Typography variant="h4" align="center" component="div" sx={{m: 1, ml:0, mt: "3rem", fontSize: "20px", fontWeight: 700}}> 
           Comments   
        </Typography>
    </div>
        <CommentForm id={detailedBlog.id} commentBlog={props.commentBlog} />

      <Box sx={{display:"flex", justifyContent: "center", alignItems: "center", flexDirection:"column", mt: -2, ml: 2}}>
     <ul>
     {detailedBlog.comments.map(comment => <Comment comment={comment} />  )}  
     </ul>
</Box>
</Box>



     
  </div>

    </div>
    )
  }

  export default DetailedBlogPost