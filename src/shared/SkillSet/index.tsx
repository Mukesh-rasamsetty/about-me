import {Box, Typography} from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import {LEVELS} from 'assets/data/skills'
import './index.scss'

interface SkillSetProps {
    data: Array<{
        name: string
        icon: string
        level: number
        content: string
    }>
}

const SkillSet = ({data = []}: SkillSetProps) => {
    const renderStar = (level: number): any =>
        [1, 2, 3, 4, 5].map((i: number) =>
            i <= level ? <StarIcon key={i} sx={{color: '#FFD700'}} /> : <StarIcon key={i} sx={{color: '#b3b3b3'}} />
        )

    return (
        <Box className='grid-row'>
            {data.map((item, index) => (
                <Box key={index} className='skill-set-container'>
                    <img src={item.icon} alt={item.name} title={item.name} />
                    <Box>
                        <Typography variant='h5'>{item.name}</Typography>
                        <Typography variant='h6'>{LEVELS[item.level]}</Typography>
                        <span>{renderStar(item.level)}</span>
                        <p>{item.content}</p>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default SkillSet
