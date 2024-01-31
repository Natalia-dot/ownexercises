import styled from "styled-components";
import { FullScreenDivProps } from "../../../props/props";

const StyledFullSCreenDiv = styled.div<FullScreenDivProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    min-height: 76vh;
    background-color: blue;
`

export const FullScreenDiv = (props: FullScreenDivProps) => {
return (
    <StyledFullSCreenDiv {...props} />
)
}