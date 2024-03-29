import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#root {
width: 100vw;
min-height: 100vh;
}

main{
  width: 100vw;
  min-height: 76vh;
  
}

p,
h1,
h2,
h3,
h4{
  color: ${({ theme }) => theme.colors.text};
}



body {
  overflow-x: hidden;
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

}`

