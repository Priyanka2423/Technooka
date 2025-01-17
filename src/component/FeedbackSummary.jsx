import React from "react";
import { Grid, Card, Typography } from "@mui/material";

//Css
import "./index.css";

//Dummy Data
import { feedbackData } from "../data";

const FeedbackSummary = () => (
  <Grid container spacing={2}>
    {
      feedbackData && feedbackData.map((elem) => (
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card className="feedback-box">
            <Typography className="title">{elem?.title}</Typography>
            <Typography className="value">{elem?.value}</Typography>
          </Card>
        </Grid>
      ))
    }
  </Grid>
);

export default FeedbackSummary;
