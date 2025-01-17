import React from "react";
import { Box, Rating, Typography, Grid } from "@mui/material";

//Custom Components
import CustomAccordion from "./CustomAccordian";

const CategoryRating = ({
    categoryRating
}) => {
    return (
        <Box>
            {
                categoryRating && categoryRating.map((elem) => (
                    <CustomAccordion
                        title={elem?.title}
                        body={
                            <Box container mt={2} >
                                <Grid container>
                                    {elem?.body.map((elem, index) => (
                                        <Grid item xs={12} sm={6} md={6} lg={6}
                                            style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "flex-start",
                                                alignItems: "flex-start",
                                                paddingBottom: "15px"
                                            }}
                                            key={index}
                                        >
                                            <Typography>{elem.title}</Typography>
                                            <Box style={{
                                                display: "flex"
                                            }}>
                                                <Rating value={elem.rating} readOnly />
                                                <Typography>{elem?.status}</Typography>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        }
                    />
                ))
            }


        </Box>
    )
}

export default CategoryRating;