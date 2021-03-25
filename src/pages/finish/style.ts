import styled from 'styled-components';

/* FaRegCheckCircle */

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100vh;

  background: ${(props) => props.theme.colors.secondary};
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem auto 0;
  width: 95%;

  justify-content: center;
  align-items: center;
`;

export const IconText = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

export const FlexTitle = styled.div`
  margin: 12px 1rem 5px;

  @media (min-width: 720px) {
    margin: 12px 3rem 5px;
  }
  @media (min-width: 1250px) {
    margin: 12px 3.5rem 5px;
  }
`;

export const PaymentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;

  margin: 0 auto;
  padding: 1rem 0;

  background: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
`;

export const TextPayments = styled.h2`
  margin: 0 1rem;

  line-height: 2rem;
  text-transform: uppercase;

  font-weight: 500;
`;
