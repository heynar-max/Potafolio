import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --color-fondo: #000000;
}

*{
    padding: 0;
    margin: 0;
    
}

body{
    background-color: var(--color-fondo);
}
`;

export default GlobalStyle;