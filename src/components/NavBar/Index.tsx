import { MainNav, NavSelected, NavSelection, TextContainer } from './Styles';

const NavBar: React.FC = () => {
  return (
    <MainNav>
      <TextContainer>
        <NavSelected>SACOLA</NavSelected>
      </TextContainer>
      <TextContainer>
        <NavSelection>PAGAMENTO</NavSelection>
      </TextContainer>
      <TextContainer>
        <NavSelection>CONFIRMAÇÃO</NavSelection>
      </TextContainer>
    </MainNav>
  );
};

export default NavBar;
