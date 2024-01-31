import styled from "styled-components";
import { ButtonProps } from "../../../props/props";

const StyGeneralButton = styled.button<ButtonProps>`
  width: 6rem;
  height: 3rem;
  background: ${({theme}) => theme.colors.backgroundDark};
  transition: transform 0.2s, background 0.4s; 

  &:hover {
  background: ${({theme}) => theme.colors.backgroundLight};
    transform: scale(1.1);
  }
`;

export const GeneralButton = (props: ButtonProps) => {
  return <StyGeneralButton {...props} />;
};
