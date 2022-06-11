import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton'
import ForumIcon from '@mui/icons-material/Forum';
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';

const CommentForm = (props) => {
  const [comment,setComment] = useState("")
  

  const commentSubmit = (event) => {
    event.preventDefault()
    props.commentBlog(props.id, comment)
    setComment('')
  }
  return (



<div  style={{display:"flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginLeft: 2}}>

<form onSubmit={commentSubmit}>


        <TextField 
        sx = {{m: "1rem", ml: "10rem", mb:"0.5rem", mr:"0.2rem", width: 520}}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             <ForumIcon />
            </InputAdornment>
          ),
        }}
        required
        size="small"
        color="secondary" 
        type="text" 
        placeholder="comment"
        value={comment} 
        onChange={({ target }) => setComment(target.value)} />
        <span>
          <Button type="submit">
          <IconButton size="large" sx={{mt:1, '&:hover':{color:"blue"} }}>
          <SendIcon /> 
          </IconButton>
          </Button>
        </span>
        </form>
        
      </div>
          
  )
}

export default CommentForm