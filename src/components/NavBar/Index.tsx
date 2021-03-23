import { useRouter } from 'next/router';

import { MainNav, NavSelected, NavSelection, TextContainer } from './Styles';

const NavBar: React.FC = () => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <MainNav>
      <TextContainer>
        {path === '/' ? <NavSelected>SACOLA</NavSelected> : <NavSelection>SACOLA</NavSelection>}
      </TextContainer>
      <TextContainer>
        {path === '/payments' ? (
          <NavSelected>PAGAMENTO</NavSelected>
        ) : (
          <NavSelection>PAGAMENTO</NavSelection>
        )}
      </TextContainer>
      <TextContainer>
        <NavSelection>CONFIRMAÇÃO</NavSelection>
      </TextContainer>
    </MainNav>
  );
};

export default NavBar;
