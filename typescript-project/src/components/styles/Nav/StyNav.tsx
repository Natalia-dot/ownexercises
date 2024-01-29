import styled from "styled-components";
import { NavProps } from "../../../props/props";

export const StyledNav = styled.nav<NavProps>`
   background-color: ${({ theme }) => theme.colors.background};
   color: ${({ theme }) => theme.colors.text};
  width: 100vw;
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  a {
    background-color: ${({ theme }) => theme.colors.secondaryBackground};
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.text};
    width: 10vw;
    padding: 1rem 2rem;
    border-radius: 25px;
    transition: transform 0.3s ease-in-out;
    transition: box-shadow 0.15s ease-in-out;
  }

  .container1 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  a:hover {
    transform: scale(1.05);
    -webkit-box-shadow: 0px 2px 4px 5px rgba(0, 0, 0, 0.40);
    -moz-box-shadow: 0px 2px 4px 5px rgba(0, 0, 0, 0.40);
    box-shadow: 0px 2px 5px 4px rgba(0, 0, 0, 0.400);
  }
`;
