import { Box } from './styles';

import { FaAngleRight } from 'react-icons/fa';
import iconEdit from '../../assets/iconEdit.svg';
import { useNavigate, useParams } from 'react-router-dom';
import formatterMoney from '../../utils/formatterMoney';

export function CardItemAdmin({ id, img, name, description, price }) {
  const navigate = useNavigate();

  return (
    <>
      <Box>
        <img
          onClick={() => navigate(`/products/${id}`)}
          src={iconEdit}
          alt="imagem de um icone a direita em formato de coração"
        />

        <div onClick={() => navigate(`/products/${id}`)} className="content">
          <img src={img} alt="imagem de uma comida feita de camarão" />
        </div>
        <h4>
          {name}
          <FaAngleRight />
        </h4>
        <p>{description}</p>
        <span>{`${formatterMoney(price)}`}</span>
      </Box>
    </>
  );
}
