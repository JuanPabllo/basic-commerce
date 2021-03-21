import styled from 'styled-components';

import { MainButton } from '../components/Button/style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.colors.secondary};
  height: 100vh;

  /* &:hover ${MainButton} {
    background: #d45a00;
  } */
`;
