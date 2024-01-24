import React from 'react'
import { ThemeButton, ThemeContainer } from '../../components/ThemeButton'

export const Home = () => {
  return (
    <ThemeContainer>
      <ThemeButton $myTheme='light' />
      <ThemeButton $myTheme='dark'/>
      <ThemeButton $myTheme='blue'/>
      <ThemeButton $myTheme='green'/>
      <ThemeButton $myTheme='brown'/>
      <ThemeButton $myTheme='pink' className='active'/>
    </ThemeContainer>
  )
}
