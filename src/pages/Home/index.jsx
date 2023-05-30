import { Container, Box } from './styles';
import imgHeader from '../../assets/img/imgHeader.png';
import { CardItem } from '../../Components/CardItem';
import { Header } from '../../Components/Header';
import { useState, useEffect } from 'react';
import { Footer } from '../../Components/Footer';
import { Section } from '../../Components/Section';
import { handleFilter } from '../../utils/handleFilter';
// import { useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

export function Home() {
  // const params = useParams();
  const { user } = useAuth();
  const [filterText, setFilterText] = useState('');
  const [products, setProducts] = useState([]);

  // const [load, setLoad] = useState(true);
  // const [error, setError] = useState('');

  // async function getApiData() {
  //   try {
  //     const response = await api.get('/products');

  //     setProducts(response.data);
  //   } catch (error) {
  //     setError('Api fora do ar');
  //   } finally {
  //     setLoad(false);
  //   }
  // }
  // useEffect(() => {
  //   getApiData();
  // }, []);

  // if (load) {
  //   return <h1>...carregando</h1>;
  // }
  // if (error) {
  //   return <h1>{error}</h1>;
  // }

  async function getProducts() {
    try {
      const response = await api.get('/products');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
      alert('deu erro');
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header filterText={filterText} onFilterTextChange={setFilterText} />
      <Container>
        <Box>
          <div>
            <img src={imgHeader} alt="logo header" />
          </div>
          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Box>

        <Section title={'Refeições'}>
          {products
            .filter((product) => product.category === 'refeição')
            .map((product) => (
              <CardItem
                key={product.id}
                filterText={filterText}
                description={product.description}
                name={product.name}
                img={product.img}
                price={product.price}
              />
            ))}
        </Section>

        <Section title={'Sobremesas'}>
          {products
            .filter((product) => product.category === 'sobremesa')
            .map((product) => (
              <CardItem
                key={product.id}
                filterText={filterText}
                description={product.description}
                name={product.name}
                img={product.img}
                price={product.price}
              />
            ))}
        </Section>

        <Section title={'Bebidas'}>
          {products
            .filter((product) => product.category === 'bebida')
            .map((product) => (
              <CardItem
                key={product.id}
                filterText={filterText}
                description={product.description}
                name={product.name}
                img={product.img}
                price={product.price}
              />
            ))}
        </Section>
      </Container>
      <Footer />
    </>
  );
}
