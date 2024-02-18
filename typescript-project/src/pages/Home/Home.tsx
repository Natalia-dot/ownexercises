import React, { useState } from 'react'
import { FlexDiv, WorkCard } from '../../components'
import { FullScreenDiv } from '../../components/styles/Main/FullScreenDiv'
import { introduction } from '../../media/data'
import { GeneralButton } from '../../components/styles'


export const Home = () => {
  const [activeItem, setActiveItem] = useState(introduction[0])
  return (
<>
<FullScreenDiv>
<FlexDiv $row $justify='space-around' $h='65vh'>
  <FlexDiv $w='20vw' $h='60vh'>
  <GeneralButton onClick={() => setActiveItem(introduction[0])}>Who am I?</GeneralButton>
  <GeneralButton onClick={() => setActiveItem(introduction[1])}>What I do</GeneralButton>
  <GeneralButton onClick={() => setActiveItem(introduction[2])}>My background</GeneralButton>
  </FlexDiv >
  <WorkCard item={activeItem}/> 
 
</FlexDiv>
</FullScreenDiv>
</>
  )
}
