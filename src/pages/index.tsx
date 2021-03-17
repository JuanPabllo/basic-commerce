import NavBar from '../components/NavBar/Index';
import { Products } from '../components/Products';
import { Strong } from '../styles/Styles';

const Home: React.FC = () => {
    return (
        <>
            <NavBar />
            <Strong>PRODUTOS</Strong>
            <Products />
        </>
    );
};

export default Home;
