import { Button } from '../Button';
import { Box, Container } from './styles';
import { useNavigate } from 'react-router-dom';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa';
import { api } from '../../services/api';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import formatterMoney from '../../utils/formatterMoney';
import { useState, useEffect } from 'react';

export function CardItem({ id, img, name, description, price }) {
  const [count, setCount] = useState(1);
  const [product, setProducts] = useState([]);

  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const imgUrl = `${api.defaults.baseURL}/files/${img}`;

  const navigate = useNavigate();

  function handleDetails() {
    setProducts(product);
    navigate(`/products/${id}`);
  }

  function handleAdd() {
    setCount(count + 1);
  }
  function handleSubtract() {
    setCount(count - 1);
    if (count === 1) {
      setCount(1);
    }
  }

  return (
    <>
      <Container>
        <Box>
          {isHeartFilled ? (
            <AiFillHeart
              onClick={() => setIsHeartFilled(false)}
              fill={'red'}
              size={30}
              style={{ marginLeft: 'auto' }}
            />
          ) : (
            <AiOutlineHeart
              style={{ marginLeft: 'auto' }}
              size={30}
              onClick={() => setIsHeartFilled(true)}
            />
          )}

          <div onClick={() => handleDetails(product.id)} className="content">
            <img src={imgUrl} alt="sobremesa de banana" />
          </div>
          <h4>
            {name}
            <FaAngleRight />
          </h4>
          <p>{description}</p>
          <span>{`${formatterMoney(price)}`}</span>
          <div className="addItems">
            <button onClick={handleSubtract} className="btn">
              <FiMinus size={25} />
            </button>
            <span>{String(count).padStart(2, '0')}</span>
            <button onClick={handleAdd} className="btn">
              <FiPlus size={25} />
            </button>
            <Button
              onClick={() => {
                count;
              }}
              title={'incluir'}
            />
          </div>
        </Box>
      </Container>
    </>
  );
}
