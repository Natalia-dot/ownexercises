import styled from "styled-components";
import { FlexDivProps } from "../props/props";

const StyledFlexDiv = styled.div<FlexDivProps>`
    display: flex;
    flex-direction: ${(props) => props.$row ? 'row' : 'column'};
    align-items: ${(props) => props.$align ? props.$align : 'center'};
    justify-content: ${(props) => props.$justify ? props.$justify : 'center'};
    width: ${(props) => props.$w ? props.$w : '90vw'};
    background: rgba(0, 0, 0, 30%);
    margin: 1rem;
    padding: 0 2rem;

    img{
        width: calc( ${(props) => props.$small ? '10vw' : props.$w ? `${parseInt(props.$w) - 20}vw`: '90%'});
        margin:1rem 0 2rem 0;
    }

    p {
    margin: 1rem 0;
    }

    .centeredContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0;
    }

    h3 {
        margin: 1.5rem 0 0 0;
    }
`

export const FlexDiv = (props: FlexDivProps) => {
return (
    <StyledFlexDiv {...props}/>
)
}