import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  box-sizing: border-box;
}

#root {
  --background: #EBEBEB;
  --bgWhite: #FFFFFF;
  --orange: #FF6C00;
  --orangeHover: #D45A00;
  --inFocus: #c3d8;

  font-size: 62.5%; /* 1rem = 10px*/
}

html,
body {
  padding: 0;
  margin: 0;
  
  background: var(--background);
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