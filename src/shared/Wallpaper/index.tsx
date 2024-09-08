import {Box} from '@mui/material'
import wallpaperImg from 'assets/images/wallpaperImg.jpg'
import './index.scss'

const Wallpaper = () => (
    <Box className='wallpaper-container'>
        <Box className='wallpaper-card'>
            <img src={wallpaperImg} alt='wallpaper not found' />
            <Box className='side-card' />
        </Box>
        <Box className='wallpaper-overlay-paper' />
    </Box>
)

export default Wallpaper
