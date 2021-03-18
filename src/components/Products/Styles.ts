import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 95%;
  margin: 20px auto;
`;

export const Strong = styled.strong`
  font-size: 1.5rem;
  padding: 0 0 5px 10px;
`;

export const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.colors.white};
  height: 100%;
  font-size: 0.8rem;
`;

export const ContainerProducts = styled.div`
  width: 90%;
  border: 1px solid ${(props) => props.theme.colors.secondary};

  margin: 0 auto 1rem;
`;
