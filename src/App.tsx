import {Box} from '@mui/material'
import Content from 'components/Content'
import Footer from 'components/Footer'
import Header from 'components/Header'
// import Wallpaper from 'shared/Wallpaper'

const App = () => (
    <Box className='app-container'>
        <Header />
        <Content />
        <Footer />
        {/* <Wallpaper /> */}
    </Box>
)
export default App
