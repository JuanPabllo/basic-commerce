import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  width: 95%;
  height: 16rem;

  background: ${(props) => props.theme.colors.secondary};
  border: 2px solid ${(props) => props.theme.colors.gray};
  border-radius: 5px;

  margin: 2rem auto;
`;

export const TagNames = styled.div`
  text-align: left;
  padding-left: 1rem;
`;

export const TagPrices = styled.div`
  text-align: right;
  padding-right: 1rem;
`;

export const DefaultText = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const StylizedText = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.4rem;
  font-weight: 500;

  margin-bottom: 2.5rem;
`;

export const TotalPrice = styled.strong`
  font-size: 1.4rem;
`;
