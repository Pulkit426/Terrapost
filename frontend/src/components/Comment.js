import { Typography } from "@mui/material"
const randomMC = require('randomcolor');

const Comment = (props) => {
    var color = randomMC( {luminosity: 'light'});
    return (
    
    <Typography variant="body1" component="div" 
    sx = {{m:"1rem", ml:"4rem", p: "0.5rem",  backgroundColor: color, width: 510, height: 20, alignItems: "center", color:"#4b5563", fontStyle: "italic", borderRadius: "0.5rem", fontWeight: 400 }}>
        {props.comment}
        
      </Typography>


    )
 }

export default Comment