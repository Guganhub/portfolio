import React from 'react'

import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import '../styles/ProjectDisplay.css'

const ProjectDisplay = () => {
    

    const {id} = useParams()
    const project = ProjectList[id]
    
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} alt='project'/>
        <p><b>Tech used :</b>{project.TechUsed}</p>
        <a href={project.GithubUrl}><GitHubIcon/></a>
        <a href={project.Url}><LinkIcon/></a>
      
    </div>
  )
}

export default ProjectDisplay
