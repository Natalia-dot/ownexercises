import React from 'react'
import { FlexDiv } from './FlexDiv'



export const WorkCard = (prop:any) => {
  const item = prop.item
  return (
    <FlexDiv $w='70vw' $h='70vh' $medium $justify='space-between' $align='stretch' $row>
      <div style={{'width':'40vw'}}>
  {item.title}
  {item.text}
  {item.extra && <div className='centeredContainer'>{item.extra}</div>}
  </div>
  <div style={{'width':'100%', 'margin':'10px' }}>
  {item.img}
  </div>
  </FlexDiv>
  )
}
