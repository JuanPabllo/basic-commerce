import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;

  background: ${(props) => props.theme.colors.secondary};
  height: 100vh;

  padding-bottom: 1.2rem;
`;
