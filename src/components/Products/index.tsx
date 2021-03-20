import { useContext } from 'react';

import { ApiContext } from '../../contexts/apiContext';
import { Container, ContainerInner, ContainerProducts, Strong } from './Styles';

export const Products: React.FC = () => {
  const { dataApi } = useContext(ApiContext);
  console.log(dataApi);

  return (
    <Container>
      <Strong>PRODUTOS</Strong>
      <ContainerInner>
        {dataApi.map((data) => (
          <ContainerProducts key={data.product.sku}>
            <h1>{data.product.name}</h1>
          </ContainerProducts>
        ))}
      </ContainerInner>
    </Container>
  );
};
