import { useState } from 'react';
import InputMask from 'react-input-mask';

import { Button } from '../../components/Button/index';
import NavBar from '../../components/NavBar/Index';
import { Prices } from '../../components/Prices/index';
import { Title } from '../../components/Title/index';
import {
  Container,
  ContainerData,
  ContainerInfo,
  ContainterInnerInfo,
  FlexTitle,
  FormContainer,
  Input,
  Label
} from './styles';

const FormPayments: React.FC = () => {
  const [numberCard, setNumberCard] = useState('');
  const [name, setName] = useState('');
  const [validity, setValidity] = useState('');
  const [cvv, setCvv] = useState('');

  const sendInfoToStorage = () => {
    localStorage.setItem('numberCard', numberCard);
    localStorage.setItem('name', name);
    localStorage.setItem('validity', validity);
    localStorage.setItem('cvv', cvv);
  };

  return (
    <Container>
      <NavBar />
      <FlexTitle>
        <Title>CARTÃO DE CRÉDITO</Title>
      </FlexTitle>
      <FormContainer>
        <ContainerData>
          <Label>Número do cartão:</Label>
          <InputMask
            mask="9999-9999-9999-9999"
            onChange={(e) => setNumberCard(e.target.value)}
            value={numberCard}>
            <Input required placeholder="____-____-____-____" />
          </InputMask>
          <Label>Nome do Titular:</Label>
          <InputMask mask="" onChange={(e) => setName(e.target.value)} value={name}>
            <Input required placeholder="Como no cartão" />
          </InputMask>
        </ContainerData>
        <ContainerInfo>
          <ContainterInnerInfo>
            <Label>Validade (mês/ano):</Label>
            <InputMask
              mask="99/9999"
              onChange={(e) => setValidity(e.target.value)}
              value={validity}>
              <Input required placeholder="__/ ____" />
            </InputMask>
          </ContainterInnerInfo>
          <ContainterInnerInfo>
            <Label>CVV:</Label>
            <InputMask mask="999" onChange={(e) => setCvv(e.target.value)} value={cvv}>
              <Input required placeholder="___" />
            </InputMask>
          </ContainterInnerInfo>
        </ContainerInfo>
      </FormContainer>
      <Prices />
      <Button onClick={sendInfoToStorage}>FINALIZAR O PEDIDO</Button>
    </Container>
  );
};

export default FormPayments;
