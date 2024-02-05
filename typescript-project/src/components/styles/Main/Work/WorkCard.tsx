import React from 'react'
import { FlexDiv } from '../../../FlexDiv'

export const WorkCard = (item:any) => {
  return (
    <FlexDiv $w='40vw' $h='30vh' $justify='left' $align='start'>
  {item.title}
  {item.text}
  {item.extra && <div className='centeredContainer'>{item.extra}</div>}
  <div className='centeredContainer'>
  {item.img}
  </div>
  </FlexDiv>
  )
}
