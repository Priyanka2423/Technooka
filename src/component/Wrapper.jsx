import React from "react";
import Box from "@mui/material/Box";

//Css
import "./index.css";

const Wrapper = ({ children, className = "" }) => {
    return (
        <Box className={`wrapper ${className}`}>
            {children}
        </Box>
    )
}

export default Wrapper;