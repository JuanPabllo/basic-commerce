import Head from 'next/head';

import { Button } from '../components/Button/index';
import NavBar from '../components/NavBar/Index';
import { Prices } from '../components/Prices';
import { Products } from '../components/Products';
import { Container } from '../styles/Styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Commerce</title>
      </Head>
      <NavBar />
      <Products />
      <Prices />
      <Button teste="/payments">SEGUIR PARA O PAGAMENTO</Button>
    </Container>
  );
};

export default Home;
