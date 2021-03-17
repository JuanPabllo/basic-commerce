import { ButtonNav, ButtonNavActived, MainNav, TextContainer } from './Styles';

const NavBar: React.FC = () => {
  return (
    <MainNav>
      <TextContainer>
        <ButtonNavActived>SACOLA</ButtonNavActived>
      </TextContainer>
      <TextContainer>
        <ButtonNav>PAGAMENTO</ButtonNav>
      </TextContainer>
      <TextContainer>
        <ButtonNav>CONFIRMAÇÃO</ButtonNav>
      </TextContainer>
    </MainNav>
  );
};

export default NavBar;
