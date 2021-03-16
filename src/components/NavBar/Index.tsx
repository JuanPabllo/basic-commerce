
import { ButtonNav, ButtonNavActived, MainNav, TextContainer } from "./Styles";

export const NavBar = () => {
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
}