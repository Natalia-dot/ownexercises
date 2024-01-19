import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface NavProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  theme?: "light" | "dark";
}

export const StyledNav = styled.nav<NavProps>`
  background-color: ${(props) =>
    props.theme === "light" ? "#b29d9d" : "#393333"};
  color: ${(props) => (props.theme === "light" ? "#393333" : "#b29d9d")};
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  a {
    background-color: #b29d9d;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #393333;
    width: 10vw;
    padding: 1rem 2rem;
    border-radius: 25px;
    transition: transform 0.3s ease-in-out;
    transition: box-shadow 0.15s ease-in-out;
  }

  a:hover {
    transform: scale(1.1);
    -webkit-box-shadow: 0px 3px 5px 5px rgba(0, 0, 0, 0.58);
    -moz-box-shadow: 0px 3px 5px 5px rgba(0, 0, 0, 0.58);
    box-shadow: 0px 3px 5px 5px rgba(0, 0, 0, 0.58);
  }
`;

export const Nav = (props: NavProps) => {
  return (
    <StyledNav {...props}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/work">Work</NavLink>
      <NavLink to="/interests">Interests</NavLink>
      <NavLink to="/media">Media</NavLink>
    </StyledNav>
  );
};
