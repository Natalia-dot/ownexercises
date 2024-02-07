import styled from "styled-components";
import { ButtonProps } from "../../../props/props";
import { useNavigate } from "react-router-dom";

export const StyGeneralButton = styled.button<ButtonProps>`
  min-width: 8rem;
  padding: 1rem;
  height: 3rem;
  background: ${({theme}) => theme.colors.backgroundDark};
  transition: transform 0.2s, background 0.4s; 

  &:hover {
  background: ${({theme}) => theme.colors.backgroundLight};
    transform: scale(1.1);
  }
`;

export const GeneralButton = (props: ButtonProps) => {
  const navigate = useNavigate();
  return <StyGeneralButton onClick={() => props.$nav && navigate(props.$nav)}{...props} />;
};
