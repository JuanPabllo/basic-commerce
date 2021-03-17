import styled from 'styled-components';

export const MainNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

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
  padding-left: 0.8rem;
`;

export const ButtonNav = styled.strong`
  color: #cccccc;
`;
export const ButtonNavActived = styled.strong`
  color: #ff6c00;
`;
