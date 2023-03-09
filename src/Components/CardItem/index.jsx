import { Button } from '../Button';
import { Box } from './styles';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa';
import shrimp from '../../assets/shrimp.png';
import heart from '../../assets/heart.png';
import formatterMoney from '../../utils/formatterMoney';

const card = {
  name: 'Spaguetti Gambe',
  description: 'Massa fresca com camarões e pesto',
  price: 79.97,
  // img: '../../../assets/shrimp.png',
};
export function CardItem() {
  return (
    <Box>
      <img
        src={heart}
        alt="imagem de um icone a direita em formato de coração"
      />

      <div>
        <img src={shrimp} alt="imagem de uma comida feita de camarão" />
      </div>

      <h4>
        {card.name}
        <FaAngleRight />
      </h4>
      <p>{card.description}</p>

      <span>{`${formatterMoney(card.price)}`}</span>
      <div>
        <button className="btn">
          <FiMinus size={25} />
        </button>
        <span>0</span>
        <button className="btn">
          <FiPlus size={25} />
        </button>

        <Button title={'incluir'} />
      </div>
    </Box>
  );
}
