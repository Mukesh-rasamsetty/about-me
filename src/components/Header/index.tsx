import './index.scss'
import logo from 'assets/images/Logo.jpg'

const Header = () => (
    <header className='header-container'>
        <img src={logo} alt='Logo' />
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
