import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
    --Gryffindor: #740001;
    --Slytherin: #1A472A;
    --Hufflepuff: #FFDB00;
    --Ravenclaw: #222F5B;
} 

* {
  box-sizing: border-box;
}

body {
    margin: 0;
    min-height: 100vh;
  }

`;
