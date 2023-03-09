import { Container } from './styles';
import imgHeader from '../../assets/imgHeader.png';

export function FoodCard() {
  return (
    <Container>
      <div>
        <img src={imgHeader} alt="" />
      </div>
      <div>
        <h1>Sabores inigualáveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </div>
    </Container>
  );
}
