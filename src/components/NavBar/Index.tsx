
import { ButtonNav, MainNav, TextContainer } from "./Styles";

export function NavBar() {
  return (
    <MainNav>
      <TextContainer>
        <ButtonNav>SACOLA</ButtonNav>
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