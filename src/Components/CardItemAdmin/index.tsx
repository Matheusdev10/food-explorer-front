import { Box, Container } from './styles';
import { FaAngleRight } from 'react-icons/fa';
import { PencilSimple } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import { api } from '../../store/apis/index';

import formatterMoney from '../../utils/formatterMoney';
import React from 'react';
import { TProduct } from '../../@types/products';

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

  const [product, setProduct] = useState<Array<TProduct>>([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState('');

  const dataResponseGetProducts = getProducts();

  async function getProducts() {
    try {
      i;

      setProduct(dataResponseGetProducts.data);
    } catch (error) {
      setError('Api fora do ar');
    } finally {
      setLoad(false);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);

  function handleDetailsAdmin(id: number) {
    console.log(product, 'product');
    setProduct(product);
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
            onClick={() => handleDetailsAdmin(product && product[0]?.id)}
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
