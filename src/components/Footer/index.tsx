import {Box} from '@mui/material'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WallpaperImg from 'assets/images/wallpaperImg.jpg'
import EmailIcon from '@mui/icons-material/Email'
import './index.scss'

const Footer = () => (
    <footer className='footer-container'>
        <Box className='main-content'>
            <img src={WallpaperImg} alt='Logo' />
            <span>
                <span className='name'>Mukesh Rasamsetty</span>© 2024
            </span>
        </Box>
        <Box className='sub-content'>
            <span>
                <WhatsAppIcon />
                &nbsp; Whatsapp:
                <span className='info'>+91 7032245791</span>
            </span>
            <strong>|</strong>
            <span>
                <InstagramIcon />
                &nbsp; Instagram:
                <a
                    href='https://www.instagram.com/mukesh_rasamsetty?igsh=cHNyYnpiYTA2eGg5'
                    target='_blank'
                    className='info'
                    rel='noreferrer'
                >
                    D 𝕄Ⓤｋ𝐞𝕤Ｈ Ⓡ𝒶𝕤𝒶𝓜𝕤𝐞ŦŦƳ
                </a>
            </span>
            <span>
                <LinkedInIcon />
                &nbsp; LinkedIn:
                <a
                    href='https://www.linkedin.com/in/rasamsetty-mukesh-b1474217a/'
                    target='_blank'
                    className='info'
                    rel='noreferrer'
                >
                    rasamsetty-mukesh
                </a>
            </span>
            <strong>|</strong>
            <span>
                <EmailIcon />
                &nbsp; Email:
                <a href='mailto:rasamsettymukesh@gmail.com' target='_blank' className='info' rel='noreferrer'>
                    rasamsettymukesh@gmail.com
                </a>
            </span>
        </Box>
        <Box className='resume'>
            <CloudDownloadIcon />
            &nbsp; Get Resume...!
        </Box>
    </footer>
)
export default Footer
