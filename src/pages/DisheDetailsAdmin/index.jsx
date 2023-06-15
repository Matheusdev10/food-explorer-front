import { Container, Box } from './styles';
import { api } from '../../services/api';
import { FaAngleLeft } from 'react-icons/fa';
import { Button } from '../../Components/Button';
import { useState, useEffect } from 'react';
import { Footer } from '../../Components/Footer';
import { TagItem } from '../../Components/TagItem';
import { HeaderAdmin } from '../../Components/HeaderAdmin';
import { useNavigate, useParams } from 'react-router-dom';

export function DisheDetailsAdmin({ id }) {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  async function handleDisheDetailsAdmin() {
    try {
      const response = await api.get(`/products/${params.id}`);

      setData(response.data);
    } catch (error) {
      console.log(error.data);
    }
  }
  useEffect(() => {
    handleDisheDetailsAdmin();
  }, []);

  function handleBack() {
    navigate(-1);
  }

  return (
    <>
      <HeaderAdmin />
      <Container>
        <div className="dishe">
          <div className="back">
            <FaAngleLeft />
            <p onClick={handleBack}>voltar</p>
          </div>
          <img src={data && data.img} alt="img de uma salada" />
        </div>

        <Box>
          <section>
            <h2>{data && data.name}</h2>
            <p>{data && data.description}</p>
            {data && data.tags.map((tag) => <TagItem title={tag} key={tag} />)}
          </section>

          <div
            onClick={() => navigate(`/editDishe/${params.id}`)}
            className="btn"
          >
            <Button title={'Editar prato'} />
          </div>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
