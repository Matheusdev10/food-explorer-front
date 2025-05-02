import { PencilSimple } from 'phosphor-react';
import { FC } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { api } from '../../store/apis/index';
import { Box, Container } from './styles';

import formatterMoney from '../../utils/formatterMoney';

interface ICardItemAdmin {
  product: {
    id: number;
    img: string;
    name: string;
    description: string;
    price: number;
    filterText?: string;
  };
}

export const CardItemAdmin: FC<ICardItemAdmin> = ({ product }) => {
  const navigate = useNavigate();

  const imageURL = `${api.defaults.baseURL}/files/${product.img}`;

  return (
    <>
      <Container>
        <Box>
          <div
            className="icone"
            onClick={() => navigate(`/editDishe/${product.id}`)}
          >
            <PencilSimple size={32} fill="red" />
          </div>

          <div
            onClick={() => navigate(`/products/${product.id}`)}
            className="content"
          >
            <img src={imageURL} alt="imagem dos pratos" />
          </div>
          <h4>
            {product.name}
            <FaAngleRight />
          </h4>
          <p>{product.description}</p>
          <span>{`${formatterMoney(product.price)}`}</span>
        </Box>
      </Container>
    </>
  );
};
