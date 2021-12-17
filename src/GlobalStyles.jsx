import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
    --Gryffindor: #6d0000;
    --Slytherin: #0b3a07;
    --Hufflepuff: #c6a513;
    --Ravenclaw: #191c68;
} 

* {
  box-sizing: border-box;
}

body {
    margin: 0;
    min-height: 100vh;
  }

`;
