import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.colors.secondary};
  height: 100vh;
`;

export const FormContainer = styled.div`
  background: ${(props) => props.theme.colors.white};

  margin: 0 auto;
  width: 95%;
`;

export const WrapperCard = styled.div``;

export const WrapperCardInfo = styled.div``;

export const Field = styled.div``;

export const Input = styled.input``;
