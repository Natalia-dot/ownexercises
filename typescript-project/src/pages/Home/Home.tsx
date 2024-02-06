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
<FlexDiv $row $justify='space-around'>
  <FlexDiv $w='20vw' $h='65vh'>
  <GeneralButton onClick={() => setActiveItem(introduction[0])}>1</GeneralButton>
  <GeneralButton onClick={() => setActiveItem(introduction[1])}>2</GeneralButton>
  <GeneralButton onClick={() => setActiveItem(introduction[2])}>3</GeneralButton>
  </FlexDiv >
  <WorkCard item={activeItem}/> 
 
</FlexDiv>
</FullScreenDiv>
</>
  )
}
