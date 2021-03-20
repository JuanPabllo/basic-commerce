import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  box-sizing: border-box;
  
  font-family: 'Montserrat', sans-serif;
}

:root{
  font-size: 62.5%; /* 1rem = 10px*/
}

html,
body {
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

a,
button {
  cursor: pointer;
}

`;
