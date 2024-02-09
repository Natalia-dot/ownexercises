import React from 'react'
import styled from 'styled-components'
import { ProjectCardProps } from '../../../../props/props'

export const StyProjectCard = styled.div<ProjectCardProps>`
background-color: beige;
display: flex;
    flex-direction: row;
    align-items: left;
    justify-content: center;
    width: 100%;
    min-height: 10vh;
    background: ${({theme}) => theme.colors.background};
    margin: 1rem;
    padding: 0 2rem;

    img{
        width: 15vw;
    }
    
`