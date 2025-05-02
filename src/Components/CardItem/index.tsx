import { FC, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaAngleRight } from 'react-icons/fa';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { api } from '../../store/apis/index';
import formatterMoney from '../../utils/formatterMoney';
import { Button } from '../Button';
import { Box, Container } from './styles';

interface ICardItem {
  product: {
    id: number;
    img: string;
    name: string;
    description: string;
    price: number;
    filterText?: string;
  };
}

export const CardItem: FC<ICardItem> = ({ product }) => {
  const navigate = useNavigate();
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const [count, setCount] = useState(1);

  function handleDetails(id: number) {
    navigate(`/products/${id}`);
  }

  const handleIncrementItem = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrementItem = () => {
    if (count <= 1) {
      return;
    }
    setCount((prev) => prev - 1);
  };

  const imageURL = `${api.defaults.baseURL}/files/${product.img}`;

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
            <h4>{product.name}</h4>
            <FaAngleRight />
          </div>
          <p>{product.description}</p>
          <span>{`${formatterMoney(product.price)}`}</span>
          <div className="addItems">
            <button className="btn">
              <FiMinus onClick={handleDecrementItem} size={25} />
            </button>
            <span>{String(count).padStart(2, '0')}</span>
            <button className="btn">
              <FiPlus onClick={handleIncrementItem} size={25} />
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
};
