import { useRouter } from 'next/router';

import { ButtonNav, ButtonNavActived, MainNav, TextContainer } from './Styles';

const NavBar: React.FC = () => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <MainNav>
      <TextContainer>
        {path === '/' ? <ButtonNavActived>SACOLA</ButtonNavActived> : <ButtonNav>SACOLA</ButtonNav>}
      </TextContainer>
      <TextContainer>
        {path === '/formPayments' ? (
          <ButtonNavActived>PAGAMENTO</ButtonNavActived>
        ) : (
          <ButtonNav>PAGAMENTO</ButtonNav>
        )}
      </TextContainer>
      <TextContainer>
        <ButtonNav>CONFIRMAÇÃO</ButtonNav>
      </TextContainer>
    </MainNav>
  );
};

export default NavBar;
