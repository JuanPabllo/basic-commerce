import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  box-sizing: border-box;
}

:root{
  font-size: 62.5%; /* 1rem = 10px*/
}

html,
body {
  padding: 0;
  margin: 0;
  
  background: ${props => props.theme.colors.secondary};
}

a {
  color: inherit;
  text-decoration: none;
}

a,
button {
  cursor: pointer;
}

`