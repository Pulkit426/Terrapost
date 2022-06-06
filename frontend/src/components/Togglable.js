/* eslint-disable no-unused-vars */
import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

const Togglable = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const noShow = { display: visible ? "none" : "flex", alignItems: "center", justifyContent: "center", margin: 15 };
  const show = { display: visible ? "" : "none"};

  const toggleVisibility = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  useImperativeHandle(ref, () => {
    return { toggleVisibility };
  });

  return (
    <div>
      <div style={noShow}>
        <Button onClick={toggleVisibility} 
                variant="contained"
                color="primary" > 
          {props.buttonLabel}
         </Button>
      </div>

      <div style={show}>
        {props.children}
        <div style={{marginLeft: "385px"}} >
        <Button onClick={toggleVisibility} color="error" sx= {{ '&:hover': {fontWeight: 900, fontSize: "15px"}}}> Cancel </Button>
        </div>
      </div>
    </div>
  );
});
Togglable.displayName = "Togglable";
Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};

export default Togglable;
