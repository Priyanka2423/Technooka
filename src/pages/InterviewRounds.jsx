import React, { useState } from "react";
import { Box, Button, Typography, Select, FormControl, MenuItem } from "@mui/material";

//Custom Components
import FeedbackSummary from "../component/FeedbackSummary";
import RatingsSummary from "../component/RatingsSummary";
import StepperComponent from "../component/StepperComponent";
import Wrapper from "../component/Wrapper";
import CategoryRating from "../component/CategoryRating";

//Css
import "./index.css";

//Dummy data
import { categories, categoryRating, steps } from "../data";

const InterviewRounds = () => {

    const [status, setStatus] = useState(10);
    const overallRating = 2;

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    return (
        <Box>
            {/* Stepper */}
            <StepperComponent steps={steps} />
            <Box className="inner-box">
                <Wrapper className="header-box">
                    <Typography className="heading">{steps[0]}</Typography>
                    <FormControl >
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={status}
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Completed</MenuItem>
                            <MenuItem value={20}>Pending</MenuItem>
                        </Select>
                    </FormControl>
                </Wrapper>
                <Wrapper className="feedback-box">
                    <FeedbackSummary />
                </Wrapper>
                <Box className="rating-box" >
                    <Typography className="heading">Overall Ratings</Typography>
                    <RatingsSummary overall={overallRating} categories={categories} />
                </Box>
                <Box className="category-box">
                    <Wrapper className="header-box inner-category-box">
                        <Typography className="heading">Categories Wise Ratings</Typography>
                        <Button className="button-txt">Text</Button>
                    </Wrapper>
                    <Box>
                        <CategoryRating categoryRating={categoryRating} />
                    </Box>
                </Box>
            </Box>

            {/* Submit Button */}
            <Box mt={4} textAlign="right">
                <Button variant="contained">Submit</Button>
            </Box>
        </Box>
    );
};

export default InterviewRounds;
