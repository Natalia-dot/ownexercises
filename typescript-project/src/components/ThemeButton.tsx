import styled from "styled-components";




interface buttonColorsType {
'light': string,
'dark': string,
'blue': string,
'green': string,
'brown': string,
'pink': string,
}

const buttonColors = {
'light': "hsl(0, 0%, 93%)",
'dark': "hsl(0, 0%, 20%)",
'blue': "hsl(195, 53%, 79%)",
'green': "hsl(150, 80%, 15%)",
'brown': "hsl(39, 70%, 50%)" ,
'pink': 'hsl(350, 100%, 88%)',
}



export const ThemeContainer = styled.div`
  display: flex;  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

interface ThemeButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  $myTheme: keyof buttonColorsType;
}

const ThemeButtonStyled = styled.button<ThemeButtonProps>`
  margin: 0 5px;
  padding: 10px;
  font-size: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  background-color: ${(props) => props.$myTheme && buttonColors[props.$myTheme]};
  width: 20px;
  height: 20px;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.border};
  }
  &.active{
    border: 3px solid black;
}
`;

  // background-color: ${(props) => props.myTheme && buttonColors[props.myTheme]}; //X This is incorrect
  /* EX  esto nos esta dando un error en la consola. No concretamente esta linea, pero tambien
  --ex se aplica, porque myTheme NO es una propiedad del DOM real (como es autofocus o checked)
  --ex entonces se pasa al arbol del DOM para que el navegador la comprenda, pero como no existe nos
  --ex da ambos warning y error. Si lo ponemos con simbolo de dolar, parara*/
//   background-color: ${(props) => props.$myTheme && buttonColors[props.$myTheme]}; //O This is correct
    /*EX Hemos tenido que cambiar todas las instancias de myTheme: cuando declarabamos el tipo,
    --ex en la implementacion del boton, y aqui. */

export const ThemeButton = (props: ThemeButtonProps) => {
 
return (
<ThemeButtonStyled {...props} />
    ) 
}