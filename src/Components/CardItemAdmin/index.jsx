import { Button } from '../Button';
import { Box } from './styles';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa';
import iconEdit from '../../assets/iconEdit.svg';
import formatterMoney from '../../utils/formatterMoney';

export function CardItemAdmin({
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
          src={iconEdit}
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
      </Box>
    </>
  );
}
