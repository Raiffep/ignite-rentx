import React from 'react';
import { 
  Container,
  Details,
  Brand,
  Name,
  About,
  Period,
  Price
} from './styles';

const CardCar: React.FC = () => {
  return (
    <Container>
      <Details>
        <Brand>AUDI</Brand>
        <Name>RS 5 Coupé</Name>
        <About>
          <Period>Ao dia</Period>
          <Price>R$ 120</Price>
        </About>
      </Details>
    </Container>
  );
}

export default CardCar;