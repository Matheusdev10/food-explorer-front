import { Box } from './styles';
import { FaAngleRight } from 'react-icons/fa';
import iconEdit from '../../assets/iconEdit.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import formatterMoney from '../../utils/formatterMoney';

export function CardItemAdmin({ id, img, name, description, price }) {
  const navigate = useNavigate();

  const [product, setProducts] = useState([]);

  const imgUrl = `https://api-food-explorer-8zqg.onrender.com/assets/${img}`;

  function handleDetailsAdmin() {
    setProducts(product);
    navigate(`/products/${id}`);
  }

  return (
    <>
      <Box>
        <img
          onClick={() => navigate(`/editDishe/${id}`)}
          src={iconEdit}
          alt="imagem de um icone a direita em formato de lapis"
        />

        <div onClick={() => handleDetailsAdmin(product.id)} className="content">
          <img src={imgUrl} alt="imagem dos pratos" />
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
