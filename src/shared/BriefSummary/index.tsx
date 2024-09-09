import {Box} from '@mui/material'
import ProfileCard from 'assets/images/profileCard.jpg'
import './index.scss'

const BriefSummary = () => (
    <Box className='summary-container'>
        <Box className='summary-img-container'>
            <img src={ProfileCard} alt='Profile Card' />
        </Box>
        <Box className='summary-content'>
            <h1>Hi, I&apos;m Mukesh, Welcome...!</h1>
            <p>
                I am a Full Stack Developer with around 4 years of experience in building scalable, high-performance web
                applications. I specialize in React for front-end development and Spring Boot Microservices for the
                backend, ensuring seamless integration and optimal user experiences. Currently, I am working as a Full
                Stack Application Development Engineer at Unisys, where I lead a team of 6 developers, delivering
                complex projects on time and with precision.
            </p>
            <p>
                My professional journey has spanned diverse domains, where I&apos;ve honed my skills in designing and
                developing full-stack applications. I have a proven track record of migrating legacy systems to modern
                architectures, improving code efficiency with best practices like Checkstyle, and enhancing application
                performance through optimization techniques.
            </p>
            <p>
                I take pride in my ability to not only code but also to lead and mentor teams, ensuring smooth project
                deliveries. I have been recognized as the Best Employee for on-time delivery and innovative
                contributions in my projects.
            </p>
            <p>
                In addition to my technical expertise, I’m passionate about continuous learning, staying updated with
                the latest trends in cloud solutions like AWS (EC2, S3), and ensuring quality through unit testing and
                CI/CD pipelines.
            </p>
        </Box>
    </Box>
)

export default BriefSummary
