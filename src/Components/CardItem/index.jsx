import { Button } from '../Button';
import { Box } from './styles';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa';
import img from '../../assets/img/bananaCandy.png';
import iconHeart from '../../assets/iconHeart.svg';
import formatterMoney from '../../utils/formatterMoney';
import { products } from '../../mock/products';

// export const products = {
//   id: string,
//   type: string,
//   img: string,
//   disheName: string,
//   description: string,
//   price: number,
//   dessertName: undefined,
//   drinksName: undefined,
// };

// {
//   products.map((product) => {
//     <CardItem key={product} />;
//     console.log(product);
//   });
// }

export function CardItem() {
  return (
    <Box>
      <img
        src={iconHeart}
        alt="imagem de um icone a direita em formato de coração"
      />
      <div className="content">
        <img src={img} alt="imagem de uma comida feita de camarão" />
      </div>
      <h4>
        {products[0].disheName}
        <FaAngleRight />
      </h4>
      <p>{products[0].description}</p>
      <span>{`${formatterMoney(products[0].price)}`}</span>
      <div>
        <button className="btn">
          <FiMinus size={25} />
        </button>
        <span>0</span>
        <button className="btn">
          <FiPlus size={25} />
        </button>
        <Button title={'incluir'} />
      </div>
    </Box>
  );
}
