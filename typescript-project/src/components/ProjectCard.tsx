import React from 'react'
import { StyProjectCard } from './styles'
import { ProjectCardProps } from '../props/props'

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <StyProjectCard {...props}/>
  )
}
