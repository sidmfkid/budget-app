
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, TextField } from '@mui/material';
import { FormControl } from '@mui/material';
import { useFormControl } from '@mui/material/FormControl';
import { useState, useMemo } from 'react';

export function FormList() {
    const [expanded, setExpanded] = useState(false);
const [projectData, setProjectData] = useState({});
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    const handleInputChange = (name) => (e) => {
        const nestedProp = name.includes(".") && name.split('.')
        if (nestedProp) {
            return setProjectData((prevState) => {return {...prevState, [nestedProp[0]]: { [nestedProp[1]]: e.target.value}}})
        }
        setProjectData((prevState) => {return {...prevState, [name]: e.target.value}})
    }

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>1. Project Details</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Project Title, Type, Location, Shooting Format, Delivery Format</Typography>
        </AccordionSummary>
        <AccordionDetails >
            <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: "space-between"}}>
                <TextField margin='normal' onChange={handleInputChange('title')} size="small" fullWidth label="Project Title"/>
                <TextField sx={{ width: '48%'}} margin='normal' onChange={handleInputChange('type')} size="small" label="Project Type"/>
                <TextField sx={{ width: '48%'}} margin='normal' onChange={handleInputChange('location')} size="small" label="Project Location"/>
                <TextField sx={{ width: '48%'}} margin='normal' onChange={handleInputChange('shooting_format')} size="small" label="Project Shooting Format"/>
                <TextField sx={{ width: '48%'}} margin='normal' onChange={handleInputChange('delivery_format')} size="small" label="Project Delivery Format"/>
            </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>2. Client Details</Typography>
          <Typography sx={{ color: 'text.secondary' }}>Client Name, Logo, Contact</Typography>

        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: "space-between"}}>
                <TextField margin='normal' onChange={handleInputChange('client.name')} size="small" fullWidth label="Client Name"/>
                {/* <TextField sx={{ width: '48%'}} margin='normal' onChange={handleInputChange('type')} size="small" label="Project Type"/> */}
                {/* <TextField sx={{ width: '48%'}} margin='normal' onChange={handleInputChange('location')} size="small" label="Project Location"/> */}
                {/* <TextField sx={{ width: '48%'}} margin='normal' onChange={handleInputChange('shooting_format')} size="small" label="Project Shooting Format"/> */}
                {/* <TextField sx={{ width: '48%'}} margin='normal' onChange={handleInputChange('delivery_format')} size="small" label="Project Delivery Format"/> */}
            </Box>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion> */}
      </div>
  );
}