import styled from "styled-components";
import { FlexDivProps } from "../props/props";

const StyledFlexDiv = styled.div<FlexDivProps>`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.$align ? props.$align : 'center'};
    justify-content: ${(props) => props.$justify ? props.$justify : 'center'};;
    width: ${(props) => props.$w ? props.$w : '90vw'};
    height: ${(props) => props.$h ? props.$h : '30vh'};
    background: rgba(0, 0, 0, 30%);
    margin: 3rem;
    padding: 2rem;
`

export const FlexDiv = (props: FlexDivProps) => {
return (
    <StyledFlexDiv {...props}/>
)
}