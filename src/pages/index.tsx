import { Button } from '../components/Button/index';
import NavBar from '../components/NavBar/Index';
import { Prices } from '../components/Prices';
import { Products } from '../components/Products';
import { Container } from '../styles/Styles';

const Home: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Products />
      <Prices />
      <Button
        onClick={() => {
          return;
        }}
        route="/payments">
        SEGUIR PARA O PAGAMENTO
      </Button>
    </Container>
  );
};

export default Home;
