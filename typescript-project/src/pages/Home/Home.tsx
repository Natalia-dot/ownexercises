import React from 'react'
import { ThemeButton, ThemeContainer } from '../../components/ThemeButton'

export const Home = () => {
  return (
    <ThemeContainer>
      <ThemeButton className='blue active'/>
      <ThemeButton className='green'/>
      <ThemeButton className='black'/>
      <ThemeButton className='white'/>
      <ThemeButton className='pink'/>
    </ThemeContainer>
  )
}
