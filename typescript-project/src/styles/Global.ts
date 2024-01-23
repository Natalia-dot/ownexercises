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


body {
  width: 100vw;
  min-height: 100vh;
}`