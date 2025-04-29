import { PencilSimple } from 'phosphor-react';
import { FC } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import { api } from '../../store/apis/index';
import { Box, Container } from './styles';

import { useSelector } from 'react-redux';
import formatterMoney from '../../utils/formatterMoney';

interface ICardItemAdmin {
  id: number;
  img: string;
  name: string;
  description: string;
  price: number;
  filterText: string;
}

export const CardItemAdmin: FC<ICardItemAdmin> = ({
  id,
  img,
  name,
  description,
  price,
}) => {
  const navigate = useNavigate();

  const { products } = useSelector((state: RootState) => state.product);

  function handleDetailsAdmin(id: number) {
    console.log(id, 'id');
    navigate(`/products/${id}`);
  }

  const imageURL = `${api.defaults.baseURL}/files/${img}`;

  const handleFilterIdProduct = (id: number) => {
    return products.find((product) => product.id === id);
  };

  const product = handleFilterIdProduct(id);

  return (
    <>
      <Container>
        <Box>
          <div className="icone" onClick={() => navigate(`/editDishe/${id}`)}>
            <PencilSimple size={32} fill="red" />
          </div>

          <div
            onClick={() => product && handleDetailsAdmin(product.id)}
            className="content"
          >
            <img src={imageURL} alt="imagem dos pratos" />
          </div>
          <h4>
            {name}
            <FaAngleRight />
          </h4>
          <p>{description}</p>
          <span>{`${formatterMoney(price)}`}</span>
        </Box>
      </Container>
    </>
  );
};
