import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
    --Gryffindor: rgb(116, 0, 1, 0.8);
    --Slytherin: rgb(26, 71, 42, 0.8);
    --Hufflepuff: rgb(255, 219, 0, 0.8);
    --Ravenclaw: rgb(34, 47, 91, 0.8);
} 

* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body {
    margin: 0;
    min-height: 100vh;
  }

`;
