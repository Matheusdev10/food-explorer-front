import { Container, Box } from './styles';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaAngleLeft } from 'react-icons/fa';
import { Button } from '../../Components/Button';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import img from '../../assets/img/saladRavanello.png';
import { TagItem } from '../../Components/TagItem';
import { ingredients } from '../../mock/ingredients';

export function DisheDetails() {
  return (
    <>
      <Header />
      <Container>
        <div className="dishe">
          <div className="back">
            <FaAngleLeft />
            <p>voltar</p>
          </div>
          <img src={img} alt="img de uma salada" />
        </div>

        <Box>
          <section>
            <h2>Salad Ravanello</h2>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              O pão naan dá um toque especial
            </p>
            {ingredients.map((ingredient) => (
              <TagItem title={ingredient.title} key={ingredient.id} />
            ))}

            <div>
              <button className="btn">
                <FiMinus size={25} />
              </button>
              <span>0</span>
              <button className="btn">
                <FiPlus size={25} />
              </button>
              <Button title={'incluir . R$ 25,00'} />
            </div>
          </section>
        </Box>
      </Container>
      <Footer />
    </>
  );
}