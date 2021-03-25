import { useContext } from 'react';

import { ApiContext } from '../../contexts/apiContext';
import formatCurrency from '../../utils/formatCurrency';
import { Title } from '../Title/index';
import {
  Container,
  ContainerInner,
  ContainerProducts,
  ProductImage,
  ProductInfos,
  TextName,
  TextPrice
} from './Styles';

export const Products: React.FC = () => {
  const { dataApi } = useContext(ApiContext);
  //console.log(dataApi);

  return (
    <Container>
      <Title>PRODUTOS</Title>
      <ContainerInner>
        {dataApi.map((data: any) => (
          <ContainerProducts key={data.product.sku}>
            <ProductImage src={data.product.imageObjects[0].extraLarge} alt="Imagem dos produtos" />
            <ProductInfos>
              <TextName>{data.product.name}</TextName>
              <TextPrice>{formatCurrency(Number(data.product.priceSpecification.price))}</TextPrice>
            </ProductInfos>
          </ContainerProducts>
        ))}
      </ContainerInner>
    </Container>
  );
};
