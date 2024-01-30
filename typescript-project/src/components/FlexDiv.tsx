import styled from "styled-components";
import { FlexDivProps } from "../props/props";

const StyledFlexDiv = styled.div<FlexDivProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: ${(props) => props.w ? props.w : '90vw'};
    height: ${(props) => props.h ? props.h : '30vh'};
    background-color: blue;
`

export const FlexDiv = (props: FlexDivProps) => {
return (
    <StyledFlexDiv {...props}/>
)
}