import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

//Css
import "./index.css";

const RatingBar = ({ label, value }) => (
  <Box className="rating-bar"
  >
    {/* Label */}
    <Typography className="rating-lables" sx={{ textAlign: "left", minWidth: 100 }}>{label}</Typography>

    {/* Progress Bar */}
    <LinearProgress
      variant="determinate"
      value={(value / 5) * 100}
      sx={{ flexGrow: 1 }}
    />
    <Box sx={{ minWidth: 25 }}>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {`${Math.round(value)}%`}
      </Typography>
    </Box>
  </Box>
);

export default RatingBar;
