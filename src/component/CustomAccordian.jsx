import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CustomAccordion = ({
    children,
    title = "",
    body = ""
}) => {
    return (
        <div className="accordian-box">
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span" style={{color:"#A6A6A6"}}>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {body}
                </AccordionDetails>
            </Accordion>
        </div>
    );
}


export default CustomAccordion;