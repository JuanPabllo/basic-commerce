import { useContext, useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import { ApiContext } from '../../contexts/apiContext';
import formatCurrency from '../../utils/formatCurrency';
import { Title } from '../Title/index';
import {
  Container,
  ContainerInner,
  ContainerProducts,
  Loader,
  LoaderContainer,
  ProductImage,
  ProductInfos,
  TextName,
  TextPrice
} from './Styles';

export const Products: React.FC = () => {
  const { dataApi } = useContext(ApiContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, [dataApi]);

  return (
    <Container>
      <Title>PRODUTOS</Title>
      {loaded == false ? (
        <IconContext.Provider
          value={{
            color: '#FF6C00',
            size: '3rem'
          }}>
          <LoaderContainer>
            <Loader>
              <FaShoppingCart />
            </Loader>
          </LoaderContainer>
        </IconContext.Provider>
      ) : (
        <ContainerInner>
          {dataApi.map((data: any) => (
            <ContainerProducts key={data.product.sku}>
              <ProductImage
                src={data.product.imageObjects[0].extraLarge}
                alt="Imagem dos produtos"
              />
              <ProductInfos>
                <TextName>{data.product.name}</TextName>
                <TextPrice>
                  {formatCurrency(Number(data.product.priceSpecification.price))}
                </TextPrice>
              </ProductInfos>
            </ContainerProducts>
          ))}
        </ContainerInner>
      )}
    </Container>
  );
};
