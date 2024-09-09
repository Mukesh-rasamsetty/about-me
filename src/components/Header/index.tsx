import {Box} from '@mui/material'
import './index.scss'
import logo from 'assets/images/Logo.jpg'
import {ABOUT} from 'assets/data/about'

const Header = () => (
    <header className='header-container'>
        <img src={logo} alt='Logo' />
        <Box>
            <span className='name'>{ABOUT.name}</span>
            <br />
            <span>{ABOUT.title}</span>
        </Box>
        {/* <ul>
            <li>
                <a href='#home'>Home</a>
            </li>
            <li>
                <a href='#about'>About</a>
            </li>
            <li>
                <a href='#contact'>Contact</a>
            </li>
        </ul> */}
    </header>
)

export default Header
