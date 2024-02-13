import React from 'react'
import { GeneralButton, StyProjectCard } from './styles'
import { ProjectCardProps } from '../props/props'

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <StyProjectCard {...props}>
      <img src={props.img} alt={props.alt}/>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <GeneralButton $small>
        <small>See more...</small>
      </GeneralButton>
      
    </StyProjectCard>
  )
}
