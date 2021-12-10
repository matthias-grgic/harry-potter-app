import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
    --first-color: #8ECAE6; // Light Cornflower Blue
    --second-color: #219EBC; // Blue Green
    --third-color: #023047; // Dark Blue
    --fourth-color: #FFB703; // Honey Yellow
    --fifth-color: #FB8500; // Orange
} 

* {
  box sizing: border-box;
}

body {
    margin: 0;
    min-height: 100vh;
  }

`;