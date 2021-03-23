import { useState } from 'react';
import InputMask from 'react-input-mask';

import NavBar from '../../components/NavBar/Index';
import { ContainerInner } from '../../components/Products/Styles';
import {
  Container,
  ContainerData,
  ContainerInfo,
  ContainterInnerInfo,
  FormContainer,
  Input,
  Label
} from './styles';

const FormPayments: React.FC = () => {
  const [numberCard, setNumberCard] = useState('');
  const [name, setName] = useState('');
  const [validity, setValidity] = useState('');
  const [cvv, setCvv] = useState('');

  const sendInfoToStorage = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(numberCard);
    console.log(name);
    console.log(validity);
    console.log(cvv);
  };

  return (
    <Container>
      <NavBar />
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
        <button type="submit" onClick={sendInfoToStorage}>
          manda tudo
        </button>
      </FormContainer>
    </Container>
  );
};

export default FormPayments;