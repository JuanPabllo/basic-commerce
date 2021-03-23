import Head from 'next/head';

import { MainButton } from '../components/Button/style';
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
      <MainButton>SEGUIR PARA O PAGAMENTO</MainButton>
    </Container>
  );
};

export default Home;
