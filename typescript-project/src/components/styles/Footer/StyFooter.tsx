import styled from "styled-components";
import { FooterProps } from "../../../props/props";




export const StyledFooter = styled.footer<FooterProps>`
  width: 100vw;
  height: 9vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.text};
  position: fixed;
  bottom: 0;
  gap: 10px;

`;