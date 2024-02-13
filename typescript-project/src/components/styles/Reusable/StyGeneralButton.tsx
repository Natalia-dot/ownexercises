import styled from "styled-components";
import { ButtonProps } from "../../../props/props";
import { useNavigate } from "react-router-dom";

export const StyGeneralButton = styled.button<ButtonProps>`
  min-width: ${({ $small }) => ($small ? "2rem" : "8rem")};
  padding: 1rem;
  height: ${({ $small }) => $small ? "2rem" : "3rem"};
  background: ${({ theme }) => theme.colors.backgroundDark};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-left: 3px outset ${({ theme }) => theme.colors.text};
  -webkit-box-shadow: 7px 10px 10px -5px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 7px 10px 10px -5px rgba(0, 0, 0, 0.5);
  box-shadow: 7px 10px 10px -5px rgba(0, 0, 0, 0.5);
  line-height: ${({ $small }) => $small && "0rem"};

  transition: all 0.2s, background 0.4s;

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundLight};
    transform: scale(1.1);
    -webkit-box-shadow: 9px 12px 17px 2px rgba(0,0,0,0.5);
-moz-box-shadow: 9px 12px 17px 2px rgba(0,0,0,0.5);
box-shadow: 9px 12px 17px 2px rgba(0,0,0,0.5);
  }
`;

export const GeneralButton = (props: ButtonProps) => {
  const navigate = useNavigate();
  return (
    <StyGeneralButton
      onClick={() => props.$nav && navigate(props.$nav)}
      {...props}
    />
  );
};
