import angularIcon from 'assets/images/skills/Angular.png'
import awsIcon from 'assets/images/skills/aws.png'
import cssIcon from 'assets/images/skills/css.png'
import gitIcon from 'assets/images/skills/git.png'
import htmlIcon from 'assets/images/skills/HTML.png'
import javaIcon from 'assets/images/skills/java.png'
import jsIcon from 'assets/images/skills/Js.png'
import MsSQLServerIcon from 'assets/images/skills/MSsql.png'
import reactIcon from 'assets/images/skills/React.png'
import springIcon from 'assets/images/skills/springBoot.png'
import tsIcon from 'assets/images/skills/ts.png'
import dockerIcon from 'assets/images/skills/docker.png'
import jiraIcon from 'assets/images/skills/jira.png'
import sonarLintIcon from 'assets/images/skills/sonarLint.png'

const FRONTEND_SKILLS = [
    {
        name: 'React',
        level: 4,
        icon: reactIcon,
        content: `React is a JavaScript library for building user interfaces.
         It is maintained by Facebook and a community of individual developers and companies.`
    },
    {
        name: 'Angular',
        level: 3,
        icon: angularIcon,
        content: `Angular is a TypeScript-based open-source front-end web application framework 
        led by the Angular Team at Google and by a community of individuals and corporations.`
    },
    {
        name: 'HTML',
        level: 4,
        icon: htmlIcon,
        content: `HTML (HyperText Markup Language) is the standard markup language for documents 
        designed to be displayed in a web browser. It is often used in conjunction with CSS and 
        JavaScript to create web pages.`
    },
    {
        name: 'CSS',
        level: 4,
        icon: cssIcon,
        content: `CSS (Cascading Style Sheets) is a style sheet language used for describing the 
        presentation of a webpage written in HTML or XML. It is used to control the layout of web pages.`
    },
    {
        name: 'TypeScript',
        level: 3,
        icon: tsIcon,
        content: `TypeScript is a free and open-source programming language developed and maintained by Microsoft. 
        It is a typed superset of JavaScript that compiles to plain JavaScript and is compatible with most 
        JavaScript frameworks and libraries.`
    },
    {
        name: 'JavaScript',
        level: 3,
        icon: jsIcon,
        content: `JavaScript is a high-level, dynamic, and interpreted programming language. It is commonly used 
        for client-side scripting on the web, as well as for developing desktop and mobile applications.`
    }
]

const BACKEND_SKILLS = [
    {
        name: 'Java',
        level: 4,
        icon: javaIcon,
        content: `Java is a high-level, class-based, object-oriented programming language that is designed to have 
        as few implementation dependencies as possible. Java is a statically typed language which means that every 
        variable and every expression has a type that is known at compile time.`
    },
    {
        name: 'Spring Boot',
        level: 3,
        icon: springIcon,
        content: `Spring Boot is a Java-based framework used to build web applications quickly and easily. It takes 
        an opinionated approach to configuration and provides many features out of the box, making it easier to start 
        developing web applications quickly. It also provides a powerful set of tools for building robust 
        and scalable applications.`
    },
    {
        name: 'MS SQL Server',
        level: 3,
        icon: MsSQLServerIcon,
        content: `Microsoft SQL Server is a relational database management system developed by Microsoft. It is a 
        powerful database system that supports a wide variety of data access methods and has a strong focus on 
        performance, security and reliability.`
    }
]

const TOOLS = [
    {
        name: 'Git',
        level: 3,
        icon: gitIcon,
        content: `Git is a distributed version control system that allows developers to track changes 
        in their codebase. It's a powerful tool for managing different versions of code and collaborating
         with other developers.`
    },
    {
        name: 'Jira',
        level: 2,
        icon: jiraIcon,
        content: `Jira is a web-based project management tool that allows developers to track and manage issues,
         projects and workflows. It's commonly used for agile project planning and project management.`
    },
    {
        name: 'Docker',
        level: 2,
        icon: dockerIcon,
        content: `Docker is a containerization platform that allows developers to package, ship, and run applications
         in containers. It provides a consistent and reliable way to deploy applications in different environments.`
    },
    {
        name: 'AWS',
        level: 2,
        icon: awsIcon,
        content: `AWS is a cloud computing platform provided by Amazon that provides a wide range of services including
         computing power, storage, databases, analytics, machine learning, and more. It's commonly used for building
          scalable and secure applications.`
    },
    {
        name: 'SonarLint',
        level: 3,
        icon: sonarLintIcon,
        content: `SonarLint is a code analysis tool that provides real-time feedback on code quality and security. 
        It's commonly used to identify bugs, security vulnerabilities, and performance issues in code.`
    }
]

const LEVELS = {
    1: 'Beginner',
    2: 'Intermediate',
    3: 'Advanced',
    4: 'Expert',
    5: 'Native'
}

export {BACKEND_SKILLS, FRONTEND_SKILLS, LEVELS, TOOLS}
