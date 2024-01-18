import React from 'react'
import styled from 'styled-components';

interface NavProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    theme? : 'light' | 'dark';
}

export const StyledNav = styled.nav<NavProps>`
    background-color: ${(props) => props.theme === 'light' ? '#b29d9d' : '#393333'};
    color: ${(props) => props.theme === 'light' ? '#393333' : '#b29d9d'};
    width: 100vw;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`


export const Nav = (props: NavProps) => {
  return (
    <StyledNav {...props}> 
    <p>This is the header</p>
    </StyledNav>
  )
}
