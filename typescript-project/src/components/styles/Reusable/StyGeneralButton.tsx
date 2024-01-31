import styled from "styled-components";

export const StyGeneralButton = styled.button`
    width: 5rem;
    height: 4rem;
    background-color: ${({theme}) => theme.secondaryBackground};
    color: ${({theme}) => theme.text};
`