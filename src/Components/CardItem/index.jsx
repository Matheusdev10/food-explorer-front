import { Button } from '../Button';
import { Box } from './styles';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa';
import iconHeart from '../../assets/iconHeart.svg';
import formatterMoney from '../../utils/formatterMoney';
import { Carousel } from 'react-responsive-carousel';

export function CardItem({
  img,
  disheName,
  description,
  price,
  dessertName,
  drinksName,
}) {
  return (
    <>
      <Box>
        <img
          src={iconHeart}
          alt="imagem de um icone a direita em formato de coração"
        />
        <div className="content">
          <img src={img} alt="imagem de uma comida feita de camarão" />
        </div>
        <h4>
          {disheName || dessertName || drinksName}
          <FaAngleRight />
        </h4>
        <p>{description}</p>
        <span>{`${formatterMoney(price)}`}</span>
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
    </>
  );
}
