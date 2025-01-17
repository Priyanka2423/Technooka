import React from "react";
import { Box, Typography, Rating } from "@mui/material";

//Custom Components
import RatingBar from "./RatingBar";
import CustomAccordion from "./CustomAccordian";

//Css
import "./index.css";

const RatingsSummary = ({ overall, categories }) => (
  <Box>
    <Box className="rating-header">
      <Typography variant="h4">{overall}/5</Typography>
      <Rating value={overall} readOnly />
      <Typography variant="caption">Poor+</Typography>
    </Box>
    <CustomAccordion
      title="Ratings by Category"
      body={
        <Box mt={2}>
          {categories.map((category, index) => (
            <RatingBar key={index} label={category.label} value={category.value} />
          ))}
        </Box>
      }
    />
  </Box>
);

export default RatingsSummary;
