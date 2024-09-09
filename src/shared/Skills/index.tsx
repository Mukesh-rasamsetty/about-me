import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from '@mui/material'
import {BACKEND_SKILLS, FRONTEND_SKILLS, TOOLS} from 'assets/data/skills'
import React, {useState} from 'react'
import SkillSet from 'shared/SkillSet'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Skills = () => {
    const [expanded, setExpanded] = useState<string | boolean>('panel1')

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <Box>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header'>
                    <Typography variant='h5'>Frontend Skills</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <SkillSet data={FRONTEND_SKILLS} />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header'>
                    <Typography variant='h5'>Backend Skills</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <SkillSet data={BACKEND_SKILLS} />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header'>
                    <Typography variant='h5'>Tools Used</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <SkillSet data={TOOLS} />
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default Skills
