import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Home.css'
const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi , My Name is Guganeshwaran R</h2>
        <div className='prompt'>
            <p>A Full Stack Developer who loves in developing, designing, and maintaining software applications.</p>
            <a href='https://www.linkedin.com/in/guganeshwaran-r-b840b414b'><LinkedInIcon/></a>
            <a href='https://github.com/Guganhub'><GitHubIcon/></a>
            <EmailIcon/>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
            <li className='item'>
                <h2>Front-End</h2>
                <span>HTML, CSS, Javascript, Reactjs</span>
            </li>
            <li className='item'>
                <h2>Back-End</h2>
                <span>Nodejs, ExpressJs, MySQL, Mongodb, Mongoose</span>
            </li>
            <li className='item'>
                <h2>Languages</h2>
                <span>Java, C , Python</span>
            </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
