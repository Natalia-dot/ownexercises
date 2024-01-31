import React from 'react'
import { FlexDiv } from '../../components'
import { FullScreenDiv } from '../../components/styles/Main/FullScreenDiv'
import { introduction } from '../../media/data'


export const Home = () => {
  return (
<>
<FullScreenDiv>
{introduction.map((item) => (
  <FlexDiv $w='40vw' $h='20vh'>
  {item.title}
  {item.text}
  {item.extra && item.extra}
  </FlexDiv>

))}
</FullScreenDiv>
</>
  )
}
