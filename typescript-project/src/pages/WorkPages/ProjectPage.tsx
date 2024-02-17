import React from 'react'
import { projects } from '../../media/data'
import { useParams } from 'react-router-dom'

export const ProjectPage:React.FC = () => {
    // const project = projects[window.location.pathname.split('/work/')[1]]
    //Here I am assigning the project object to project for better legibility.
    //Idk if this is a good way to do this, though probably not, I could have simply 
    //passed the name through the button. I am gonna try to do that
    //That was... My memory acutely failing me
    const {project} = useParams();
    const data = project ? projects[project] : undefined;
    console.log(data)
  return (
    <>
    {data && (
    <>
    <p>{data?.title.replaceAll('-', ' ')}</p>
    <p>{data?.desc}</p>
    <img src={data?.img} alt={data.alt}/>
    </>
    )}
</>
  )
}
