import { useContext } from 'react';

import { ApiContext } from '../../contexts/apiContext';
import { Title } from '../Title/index';
import {
  Container,
  ContainerInner,
  ContainerProducts,
  ProductImage,
  TextName,
  TextPrice
} from './Styles';

export const Products: React.FC = () => {
  const { dataApi } = useContext(ApiContext);
  console.log(dataApi);

  return (
    <Container>
      <Title>PRODUTOS</Title>
      <ContainerInner>
        {dataApi.map((data) => (
          <ContainerProducts key={data.product.sku}>
            <ProductImage src={data.product.imageObjects[0].small} alt="Imagem dos produtos" />
            <div>
              <TextName>{data.product.name}</TextName>
              <TextPrice>R$ {data.product.priceSpecification.price}</TextPrice>
            </div>
          </ContainerProducts>
        ))}
      </ContainerInner>
    </Container>
  );
};
