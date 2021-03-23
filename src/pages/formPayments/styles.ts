import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  height: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 95%;
  margin: 2rem auto 0;
  padding-bottom: 2rem;

  border-radius: 5px;

  background: white;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
`;

export const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
`;

export const ContainerInfo = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const ContainterInnerInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 0 auto;
`;

export const Label = styled.label`
  width: 95%;
  margin: 2rem auto 0.5rem;

  color: #cccccc;
  font-size: 1.4rem;
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid #cccccc;
  width: 95%;

  color: #cccccc;
  &::-webkit-input-placeholder {
    color: #cccccc;
  }
  font-size: 1.6rem;
  letter-spacing: 0.2rem;

  height: 4rem;

  margin: 0 auto;
  padding-left: 1.5rem;
`;
