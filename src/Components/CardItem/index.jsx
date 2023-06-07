import { Button } from '../Button';
import { Box, Container } from './styles';
import { useNavigate } from 'react-router-dom';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa';

import iconHeart from '../../assets/iconHeart.svg';
// import heart from '../../assets/heart.png';
import formatterMoney from '../../utils/formatterMoney';
import { useState, useEffect } from 'react';

export function CardItem({ id, img, name, description, price }) {
  const [count, setCount] = useState(1);
  const [product, setProducts] = useState([]);
  const [color, setColor] = useState('#00070A');
  const [toogle, setToogle] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setColor(() => (toogle ? '#00070A' : '#750310'));
  }, [toogle]);

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
          <button onClick={(e) => setToogle((state) => !state)}>
            <img
              style={{ background: color }}
              src={iconHeart}
              alt="imagem de um icone a direita em formato de coração"
            />
          </button>

          <div onClick={() => handleDetails(product.id)} className="content">
            <img src={img} alt="sobremesa de banana" />
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
