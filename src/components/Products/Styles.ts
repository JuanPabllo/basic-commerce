import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 95%;
  margin: 0 auto;
`;

export const ContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-bottom: 1rem;

  background: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  height: 100%;
  width: 95vw;
  font-size: 0.8rem;
`;

export const ContainerProducts = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 4fr;
  gap: 1.5rem;

  height: 100%;
  width: 95%;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 5px;

  font-size: 0.5rem;

  margin: 1rem auto 0;
`;

export const ProductImage = styled.img`
  max-width: 6rem;
  width: auto;
  max-height: 6rem;
  height: auto;

  margin-top: 1rem;
`;

export const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const TextName = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const TextPrice = styled.strong`
  padding: 0 1.5rem 1.5rem 0;

  font-weight: 600;
  font-size: 1.5rem;
`;
