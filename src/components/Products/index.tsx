import { useContext } from 'react';

import { ApiContext } from '../../contexts/apiContext';
import { Container } from './Styles';

export const Products: React.FC = () => {
  const { dataApi } = useContext(ApiContext);
  console.log(dataApi);

  return (
    <Container>
      <h1>${dataApi}</h1>
    </Container>
  );
};
