import styled from 'styled-components';

export const MainButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 5px;
  box-shadow: 0px 4px 0px #d45a00; /* adicionar a paleta de cores tipadas */

  margin: 0 auto;
  width: 95%;
  height: 8rem;

  font-size: 2rem;
  font-weight: 600;

  &:hover {
    background: #d45a00; /* adicionar a paleta de cores tipadas */
  }
`;
