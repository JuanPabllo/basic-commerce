import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.colors.secondary};
  height: 100vh;
`;

export const Strong = styled.strong`
  font-size: 1.5rem;
  padding: 0 0 5px 10px;
`;
