import { Container, Box } from './styles';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';
import { Button } from '../../Components/Button';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { TagItem } from '../../Components/TagItem';
import { useState, useEffect } from 'react';

export function DisheDetails() {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(null);

  const params = useParams();

  async function handleDisheDetails() {
    try {
      const response = await api.get(`/products/${params.id}`);

      setData(response.data);
    } catch (error) {
      console.log(error.data);
    }
  }
  useEffect(() => {
    handleDisheDetails();
  }, []);

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
      <Header />
      <Container>
        <div className="dishe">
          <div className="back">
            <FaAngleLeft />
            <Link to={'/'}>
              <p>voltar</p>
            </Link>
          </div>

          <img src={data && data.img} alt="img dos pratos do projeto" />
        </div>

        <Box>
          <section>
            <h2>{data && data.name}</h2>
            <p>{data && data.description}</p>
            {data && data.tags.map((tag) => <TagItem key={tag} title={tag} />)}

            <div>
              <button onClick={handleSubtract} className="btn">
                <FiMinus size={25} />
              </button>
              <span>{String(count).padStart(2, '0')}</span>
              <button onClick={handleAdd} className="btn">
                <FiPlus size={25} />
              </button>
              <Button title={`incluir . ${data && data.price}`} />
            </div>
          </section>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
