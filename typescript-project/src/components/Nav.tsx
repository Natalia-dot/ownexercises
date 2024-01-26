import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled, { ThemeContext, useTheme } from "styled-components";
import { ThemeButton, ThemeContainer } from "./ThemeButton";
import { light, dark, blue, green, brown, pink } from "../styles/Theme";


  /*EX he pasado desde el componente app el setState de cambiar el tema, para poder meterlo en el onClick
  --EX de los botones manualmente. Quiza se pueda hacer con un map y un object.keys para convertirlo en un solo 
  --EX elemento, una sola linea de codigo
  */
//TODO Ver si puedo hacer los botones en una sola linea de codigo


interface NavProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
    $setTheme: React.Dispatch<React.SetStateAction<{
      name: string;
      colors: {
          background: string;
          secondaryBackground: string;
          text: string;
          border: string;
          accent: string;
      };
  }>>
}

export const StyledNav = styled.nav<NavProps>`
   background-color: ${({ theme }) => theme.colors.background};
   color: ${({ theme }) => theme.colors.text};
  width: 100vw;
  height: 13vh;
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

export const Nav = (props: NavProps) => {
  //ex esta es la opcion para que cambie el tema. Set theme es una funcion declarada en app para
  //ex que tenga scope global. Tambien cambia el localstorage para que si se recarga la pagina
  //ex se mantenga el theme.
  const handleThemeChange = (theme:any) => {
    localStorage.setItem("current-theme", JSON.stringify(theme))
    props.$setTheme(theme);
  }
//FIX fix all the typescript roundabouts

  useEffect(() => {
    //ex este use effect lo usamos para que en el primer renderizado de la aplicacion busque si hay un tema.
    //ex si no lo tiene, mete un null en string; esto es porque typescript da un error si le da null en vez de string,
    //ex asi que de momento lo convierto a string, aunque hay que arreglarlo.
    //ex Si currentTheme existe y no es null, setteamos el estado al tema que se encuentra en el localstorage
    const currentTheme: any = JSON.parse(
      localStorage.getItem("current-theme") ?? "null"
    );
    if (currentTheme && currentTheme !== "null") {
      props.$setTheme(currentTheme);
    }
  }, []);

  return (
    <StyledNav {...props}>
      <div className='container1'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/work">Work</NavLink>
      <NavLink to="/interests">Interests</NavLink>
      <NavLink to="/media">Media</NavLink>
      </div>
      <ThemeContainer>
      <ThemeButton onClick={() => handleThemeChange(light)} $myTheme='light' />
      <ThemeButton onClick={() => handleThemeChange(dark)} $myTheme='dark'/>
      <ThemeButton onClick={() => handleThemeChange(blue)} $myTheme='blue'/>
      <ThemeButton onClick={() => handleThemeChange(green)} $myTheme='green'/>
      <ThemeButton onClick={() => handleThemeChange(brown)} $myTheme='brown'/>
      <ThemeButton onClick={() => handleThemeChange(pink)} $myTheme='pink'/>
    </ThemeContainer>
    </StyledNav>
  );
};

