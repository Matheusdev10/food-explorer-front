import { Box } from './styles';
import { FaAngleRight } from 'react-icons/fa';
import iconEdit from '../../assets/iconEdit.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import formatterMoney from '../../utils/formatterMoney';
import { api } from '../../services/api';

export function CardItemAdmin({ id, img, name, description, price, data }) {
  const navigate = useNavigate();
  const [product, setProducts] = useState([]);

  function handleDetailsAdmin() {
    setProducts(product);
    navigate(`/products/${id}`);
  }

  const imgUrl = `${api.defaults.baseURL}/files/${data.img}`;

  return (
    <>
      <Box>
        <img
          onClick={() => navigate(`/editDishe/${id}`)}
          src={iconEdit}
          alt="imagem de um icone a direita em formato de lapis"
        />

        <div onClick={() => handleDetailsAdmin(product.id)} className="content">
          <img src={imgUrl} alt="imagem dos pratos do projeto" />
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
