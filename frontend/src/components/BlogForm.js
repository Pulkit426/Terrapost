import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Box, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import TocIcon from '@mui/icons-material/Toc';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import InputAdornment from '@mui/material/InputAdornment';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
   
  },
});

const BlogForm = ({ addBlog }) => {
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    content: "",
    url: "",
  });

  const classes = useStyles();



  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewBlog((prevBlog) => {
      return {
        ...prevBlog,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
    addBlog(newBlog);
  };

 

  return (
    <div>


      <Box sx={{m:1 ,ml:"250px", p:1,}}>

      <form onSubmit={handleSubmit}>
        <div>
          
          <TextField variant="outlined"
           className={classes.root}         
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
               <TocIcon />
              </InputAdornment>
            ),
            style: {
              height: 35,
              width: 500,
              padding: '14px',
            },
          }}

          sx={{m:1, width: 300}}
          required

            id="title"
            type="text"
            name="title"
            placeholder="Title"
            value={newBlog.title}
            onChange={handleChange}
          />
        </div>

        <div>

        <TextField variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             <AccountCircleOutlinedIcon />
            </InputAdornment>
          ),
          style: {
            height: 35,
            width: 500,
            padding: '14px',
          },
        }}
        sx={{m:1, width: 300}}
        required
            id="author"
            type="text"
            name="author"
            placeholder="Author"
            value={newBlog.author}
            onChange={handleChange}
          />
        </div>

        <div >

        <TextField variant="outlined"
        InputProps={{
          style: {
            width: 500,
            padding: '14px'
          },
        }}
        size="large"
        sx={{m:1, width: 300}}
        multiline
        rows={10}
        required
            id="content"
            type="text"
            name="content"
            placeholder="📝Content"
            value={newBlog.content}
            onChange={handleChange}
          />
        </div>

        <div>
        <TextField variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             <InsertLinkIcon />
            </InputAdornment>
          ),
          style: {
            height: 35,
            width: 500,
            padding: '14px',
          },
        }}
        sx={{m:1, width: 300}}
        required
            id="url"
            type="text"
            name="url"
            placeholder="URL"
            value={newBlog.url}
            onChange={handleChange}
          />
        </div>

        <Button sx={{ '&:hover': {backgroundColor: '#A8E640', fontWeight: 900 }, display:"flex", alignItems: "center", justifyContent: "center",m:2, ml: 15}} 
                id="create-form" 
                type="submit" 
                variant="contained"  
                size="small" 
                startIcon={<AddIcon />} >
          {" "}
          Create{" "}
        </Button>
      </form>
      </Box>
    </div>
  );
};

BlogForm.propTypes = {
  addBlog: PropTypes.func.isRequired,
};

export default BlogForm;
