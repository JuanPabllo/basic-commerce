import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.colors.secondary};
  height: 100%;

  padding-bottom: 1.2rem;
`;
