import { Box, Container } from './styles';
import { FaAngleRight } from 'react-icons/fa';
import { PencilSimple } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../services/api';

import formatterMoney from '../../utils/formatterMoney';

export function CardItemAdmin({ id, img, name, description, price }) {
  const navigate = useNavigate();

  const [product, setProducts] = useState([]);

  function handleDetailsAdmin() {
    setProducts(product);
    navigate(`/products/${id}`);
  }

  const imageURL = `${api.defaults.baseURL}/files/${img}`;

  return (
    <>
      <Container>
        <Box>
          <div className="icone" onClick={() => navigate(`/editDishe/${id}`)}>
            <PencilSimple size={32} fill="red" />
          </div>

          <div
            onClick={() => handleDetailsAdmin(product.id)}
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
}
