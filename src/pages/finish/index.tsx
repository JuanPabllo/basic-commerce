import { useCallback, useEffect, useState } from 'react';

import NavBar from '../../components/NavBar/Index';
import { Prices } from '../../components/Prices';
import { Products } from '../../components/Products';
import { Title } from '../../components/Title';
import { Container, FlexTitle, PaymentsContainer, TextPayments } from './style';
const Finish: React.FC = () => {
  const [numberCard, setNumberCard] = useState('');
  const [name, setName] = useState('');
  const [validity, setValidity] = useState('');

  const getLocalStorage = useCallback(() => {
    setNumberCard(localStorage.getItem('numberCard'));
    setName(localStorage.getItem('name'));
    setValidity(localStorage.getItem('validity'));
  }, []);

  useEffect(() => {
    getLocalStorage();
  }, [getLocalStorage]);

  return (
    <Container>
      <NavBar />
      <FlexTitle>
        <Title>PAGAMENTO</Title>
      </FlexTitle>
      <PaymentsContainer>
        <TextPayments>
          {numberCard.replace(/[^0-9]/g, '').replace(/\w(?=\w{4})/g, '*')}
        </TextPayments>
        <TextPayments>{name}</TextPayments>
        <TextPayments>{validity}</TextPayments>
      </PaymentsContainer>
      <Products />
      <Prices />
    </Container>
  );
};

export default Finish;
