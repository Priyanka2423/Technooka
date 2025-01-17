import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";

//Custom Components
import InterviewRounds from "../InterviewRounds";
import BasicDetails from "../BasicDetails";
import ContactDetails from "../ContactDetails";
import AcademicDetails from "../AcademicDetails";
import TabPanel from "../../component/TabPanel";

//Css
import "./index.css";

const CustomTab = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <Box className="tabs-box">
            {/* Tabs Navigation */}
            <Tabs
                value={activeTab}
                onChange={handleTabChange}
                className="custom-tabs"
                variant="scrollable" // Enables scrolling
                scrollButtons="auto"
            >
                <Tab label="Basic Details" />
                <Tab label="Contact Details" />
                <Tab label="Academic Details" />
                <Tab label="Interview Rounds & Ratings" />
            </Tabs>

            {/* Tab Panels */}
            <TabPanel value={activeTab} index={0}>
                <BasicDetails />
            </TabPanel>
            <TabPanel value={activeTab} index={1}>
                <ContactDetails />
            </TabPanel>
            <TabPanel value={activeTab} index={2}>
                <AcademicDetails />
            </TabPanel>
            <TabPanel value={activeTab} index={3}>
                <InterviewRounds />
            </TabPanel>
        </Box>
    );
};

export default CustomTab;
