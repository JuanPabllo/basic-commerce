import Head from 'next/head';

import NavBar from '../components/NavBar/Index';
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
    </Container>
  );
};

export default Home;
