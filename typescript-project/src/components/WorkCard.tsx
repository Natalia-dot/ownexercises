import React from 'react'
import { FlexDiv } from './FlexDiv'



export const WorkCard = (prop:any) => {
  const item = prop.item
  return (
    <FlexDiv $w='60vw' $h='70vh' $medium $justify='left' $align='start'>
  {item.title}
  {item.text}
  {item.extra && <div className='centeredContainer'>{item.extra}</div>}
  <div className='centeredContainer' >
  {item.img}
  </div>
  </FlexDiv>
  )
}
