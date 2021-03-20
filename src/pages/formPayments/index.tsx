import NavBar from '../../components/NavBar/Index';
import { Container, Strong } from './styles';

const FormPayments: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Strong>Cartão de crédito</Strong>
    </Container>
  );
};

export default FormPayments;
