import React from 'react'
import { GeneralButton, StyProjectCard } from './styles'
import { ProjectCardProps } from '../props/props'

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <StyProjectCard {...props}>
      <img src={props.img} alt={props.alt}/>
      <div className='columnText'>
      <h3>{props.title.replaceAll('-', ' ')}</h3>
      {/** I have to do this to try and make one single page for all the projects.
       * Scalability, let's go!! This is way too much lol*/}
      <p>{props.desc}</p>
      </div>
      <GeneralButton $nav={`work/${props.title}`} $small>
        <span className="material-symbols-outlined">
add
</span>
      </GeneralButton>
      
    </StyProjectCard>
  )
}
