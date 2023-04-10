import { Container, Box } from './styles';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaAngleLeft } from 'react-icons/fa';
import { Button } from '../../Components/Button';

import { Footer } from '../../Components/Footer';
import img from '../../assets/img/saladRavanello.png';
import { TagItem } from '../../Components/TagItem';
import { ingredients } from '../../mock/ingredients';
import { HeaderAdmin } from '../../Components/HeaderAdmin';

export function DisheDetailsAdmin() {
  return (
    <>
      <HeaderAdmin />
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
          </section>

          <div className="btn">
            <Button title={'Novo prato'} />
          </div>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
