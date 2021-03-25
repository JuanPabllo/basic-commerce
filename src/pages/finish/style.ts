import styled from 'styled-components';

/* FaRegCheckCircle */

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100vh;

  background: ${(props) => props.theme.colors.secondary};
`;

export const FlexTitle = styled.div`
  margin: 12px 1rem 5px;
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
