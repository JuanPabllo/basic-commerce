import styled from 'styled-components';

export const MainNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
  width: 100vw; 
  height: 5rem;
  background: var(--bgWhite);
  font-size: 1.4rem;

  box-shadow:  0px 2px 8px rgba(0,0,0,0.2);
  
`
export const TextContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 0.8rem;
`

export const ButtonNav = styled.strong`
  color: #CCCCCC;
`
export const ButtonNavActived = styled.strong`
  color: #FF6C00;
`