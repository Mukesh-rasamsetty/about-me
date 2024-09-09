import {Box} from '@mui/material'
import './index.scss'
import BriefSummary from 'shared/BriefSummary'
import Skills from 'shared/Skills'

const Content = () => (
    <Box className='content-container'>
        <BriefSummary />
        <Skills />
    </Box>
)

export default Content
