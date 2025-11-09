import { createGlobalStyle } from 'styled-components';

export const Breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px'
};

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

body {
  background-color: gray;
}

.mainContainer {
  max-width: 1200px;
  margin: 0 auto;
}
`;

export default GlobalStyle;
