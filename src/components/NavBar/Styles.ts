import styled from 'styled-components';

export const MainNav = styled.nav`
  display: flex;
  justify-content: space-around;

  width: auto;
  height: 5rem;
  background: ${(props) => props.theme.colors.white};
  font-size: 1.4rem;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
`;
export const TextContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const NavSelection = styled.strong`
  color: #cccccc; /* adicionar a paleta de cores tipadas */
`;
export const NavSelected = styled.strong`
  color: #ff6c00; /* adicionar a paleta de cores tipadas */
`;
