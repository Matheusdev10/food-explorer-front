import { Container, Box } from './styles';
import imgHeader from '../../assets/img/imgHeader.png';
import { products } from '../../mock/products';

// import { dishes } from '../../mock/DISHES';
import { CardItem } from '../CardItem/index';

export function FoodCard() {
  return (
    <>
      <Container>
        <Box>
          <div>
            <img src={imgHeader} alt="logo header" />
          </div>
          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Box>

        {products?.map((product) => (
          <CardItem key={product} />
        ))}

        {/* {products.map((product) => {
          <CardItem key={product} />;
        })} */}
      </Container>
    </>
  );
}
