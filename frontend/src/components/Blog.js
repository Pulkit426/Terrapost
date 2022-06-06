import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";

// eslint-disable-next-line no-unused-vars
const Blog = ({ blog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };




  return (   
      <div  className="blog">
         <Link to={`/blogs/${blog.id}`} style= {{textDecoration: "none"}} > 
        <Card  elevation={3} sx = {{m: "1rem", width: 700, cursor: "pointer",
      '&:hover': {
        backgroundColor: '#D9AFD9',
        backgroundImage: 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)'

        
      }}}>
        
       <CardContent>
         
        <Typography variant="h5" component="div"> {blog.title} </Typography>
        <Typography variant="body2" component="div"> Author:  {blog.author} </Typography>

          </CardContent>



        </Card>
     </Link>

     
    </div>
   
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired
}

export default Blog;
