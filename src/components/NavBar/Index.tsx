import { useRouter } from 'next/router';

import { MainNav, NavSelected, NavSelection, TextContainer } from './Styles';

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
        <NavSelection>CONFIRMAÇÃO</NavSelection>
      </TextContainer>
    </MainNav>
  );
};

export default NavBar;
