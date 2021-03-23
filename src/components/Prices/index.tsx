import { useContext } from 'react';

import { ApiContext } from '../../contexts/apiContext';
import formatCurrency from '../../utils/formatCurrency';
import { Container, DefaultText, StylizedText, TagNames, TagPrices, TotalPrice } from './styles';

export const Prices: React.FC = () => {
  const { dataPrices } = useContext(ApiContext);

  return (
    <Container>
      <TagNames>
        <DefaultText>PRODUTOS</DefaultText>
        <DefaultText>FRETE</DefaultText>
        <StylizedText>DESCONTO</StylizedText>
        <TotalPrice>TOTAL</TotalPrice>
      </TagNames>
      <TagPrices>
        <DefaultText>{formatCurrency(Number(dataPrices.subTotal))}</DefaultText>
        <DefaultText>{formatCurrency(Number(dataPrices.shippingTotal))}</DefaultText>
        <StylizedText>- {formatCurrency(Number(dataPrices.discount))}</StylizedText>
        <TotalPrice>{formatCurrency(Number(dataPrices.total))}</TotalPrice>
      </TagPrices>
    </Container>
  );
};
