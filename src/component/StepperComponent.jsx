import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const StepperComponent = ({ steps }) => {
    const [activeStep, setActiveStep] = useState(0);
    return (
        <Box  sx={{ width: "100%", overflowX: "auto" }}>

            <Stepper activeStep={activeStep}
                
            >
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Box className="active-data-box">
                <Typography className="active-data">
                    Completed<IconButton aria-label="completed" color="success">
                        <CheckCircleOutlineIcon />
                    </IconButton>
                </Typography>
            </Box>
        </Box>
    );
};

export default StepperComponent;
