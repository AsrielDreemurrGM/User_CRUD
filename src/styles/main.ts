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
    text-decoration: none;
}

body {
  background-color: gray;
}

.mainContainer {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`;

export default GlobalStyle;
