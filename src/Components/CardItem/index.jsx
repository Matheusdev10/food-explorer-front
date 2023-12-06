import { Button } from '../Button';
import { Box, Container } from './styles';
import { useNavigate } from 'react-router-dom';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa';
import { api } from '../../services/api';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import formatterMoney from '../../utils/formatterMoney';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../features/counter/counterSlice';
export function CardItem({ id, img, name, description, price }) {
  const navigate = useNavigate();
  const [product, setProducts] = useState([]);
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  function handleDetails() {
    setProducts(product);
    navigate(`/products/${id}`);
  }

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const imageURL = `${api.defaults.baseURL}/files/${img}`;

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
            <img src={imageURL} alt="imagem dos pratos do projeto" />
          </div>
          <div className="productName">
            <h4>{name}</h4>
            <FaAngleRight />
          </div>
          <p>{description}</p>
          <span>{`${formatterMoney(price)}`}</span>
          <div className="addItems">
            <button className="btn">
              <FiMinus onClick={() => dispatch(decrement())} size={25} />
            </button>
            <span>{String(count).padStart(2, '0')}</span>
            <button className="btn">
              <FiPlus onClick={() => dispatch(increment())} size={25} />
            </button>

            <div className="btnInclude">
              <Button
                // onClick={() => dispatch(count(console.log(count)))}
                title={'incluir'}
              />
            </div>
          </div>
        </Box>
      </Container>
    </>
  );
}
