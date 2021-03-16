import styled from 'styled-components';

export const MainNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
  width: 100vw; 
  height: 4rem;
  background: var(--bgWhite);
  font-size: 0.8rem;

  box-shadow:  0px 2px 10px rgba(0,0,0,0.2);
  
`
export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonNav = styled.h2`
  color: var(--orange);
`