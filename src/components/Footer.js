import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href='https://www.instagram.com/human_being_2508'><InstagramIcon/></a>
            <a href='https://www.linkedin.com/in/guganeshwaran-r-b840b414b'><LinkedInIcon/></a>
            <a href='https://github.com/Guganhub'><GitHubIcon/></a>
            <a href='https://twitter.com/guganeshwaran1'><TwitterIcon/></a>
        </div>
        <p>&copy; 2023 Guganeshwaran </p>
      
    </div>
  )
}

export default Footer
