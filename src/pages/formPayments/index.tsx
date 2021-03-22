import { useState } from 'react';
import InputMask from 'react-input-mask';

import NavBar from '../../components/NavBar/Index';
import { Container, FormContainer, Input, WrapperCard, WrapperCardInfo } from './styles';

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
        <WrapperCard>
          <InputMask
            mask="9999-9999-9999-9999"
            onChange={(e) => setNumberCard(e.target.value)}
            value={numberCard}>
            <Input required placeholder="bota cartao" />
          </InputMask>
          <InputMask mask="" onChange={(e) => setName(e.target.value)} value={name}>
            <Input required placeholder="bota nome" />
          </InputMask>
        </WrapperCard>
        <WrapperCardInfo>
          <InputMask mask="99/9999" onChange={(e) => setValidity(e.target.value)} value={validity}>
            <Input required placeholder="bota validade" />
          </InputMask>
          <InputMask mask="999" onChange={(e) => setCvv(e.target.value)} value={cvv}>
            <Input required placeholder="bota cvv" />
          </InputMask>
        </WrapperCardInfo>
      </FormContainer>
      <button onClick={sendInfoToStorage}>manda tudo</button>
    </Container>
  );
};

export default FormPayments;
