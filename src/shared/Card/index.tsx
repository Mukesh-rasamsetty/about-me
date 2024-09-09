import {type ReactJSX} from '@emotion/react/types/jsx-namespace'
import {Box, Card} from '@mui/material'
import {Fragment} from 'react/jsx-runtime'
import './index.scss'

interface CardProps {
    image: ReactJSX.Element
    content: ReactJSX.Element
}

const MyCard = ({image = <Fragment />, content = <Fragment />}: CardProps) => (
    <Card className='card-container'>
        <Box className='card-img'>{image}</Box>
        <Box className='card-content'>{content}</Box>
    </Card>
)

export default MyCard
