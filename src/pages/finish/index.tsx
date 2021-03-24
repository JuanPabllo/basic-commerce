import { useCallback, useEffect, useState } from 'react';

import NavBar from '../../components/NavBar/Index';
import { Prices } from '../../components/Prices';
import { Products } from '../../components/Products';
import { Title } from '../../components/Title';
import { Container } from './style';
const Finish: React.FC = () => {
  const [numberCard, setNumberCard] = useState('');
  const [name, setName] = useState('');
  const [validity, setValidity] = useState('');
  const [cvv, setCvv] = useState('');

  const getLocalStorage = useCallback(() => {
    setNumberCard(localStorage.getItem('numberCard'));
    setName(localStorage.getItem('name'));
    setValidity(localStorage.getItem('validity'));
    setCvv(localStorage.getItem('cvv'));
  }, []);

  useEffect(() => {
    getLocalStorage();
  }, [getLocalStorage]);

  console.log(numberCard);
  console.log(name);
  console.log(validity);
  console.log(cvv);

  return (
    <Container>
      <NavBar />
      <Title>PAGAMENTO</Title>
      <h1>{numberCard.replace(/[^0-9]/g, '').replace(/\w(?=\w{4})/g, '*')}</h1>
      <h1>{name}</h1>
      <h1>{validity}</h1>
      <Products />
      <Prices />
    </Container>
  );
};

export default Finish;
