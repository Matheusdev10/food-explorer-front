import { Container, Box } from './styles';
import imgHeader from '../../assets/img/imgHeader.png';
import { CardItem } from '../../Components/CardItem';
import { Header } from '../../Components/Header';
import { useState, useEffect } from 'react';
import { Footer } from '../../Components/Footer';
import { Section } from '../../Components/Section';
import { api } from '../../services/api';
import {
  decrement,
  increment,
} from '../../store/features/counter/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

export function Home() {
  const [filterText, setFilterText] = useState('');
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  async function getProducts() {
    try {
      const response = await api.get('/products');

      setProducts(response.data);
    } catch (error) {
      setError('Api fora do ar');
    } finally {
      setLoad(false);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);

  if (load) {
    return <h1>...carregando</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <Header filterText={filterText} onFilterTextChange={setFilterText} />
      <Container>
        <Box>
          <div className="img">
            <img src={imgHeader} alt="logo header" />
          </div>
          <div className="card">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Box>
        {products.length !== 0 && (
          <Section title={'Refeições'}>
            {products
              .filter((product) => product.category === 'refeição')
              .filter((product) =>
                product.name.toLowerCase().includes(filterText.toLowerCase())
              )
              .map((product) => (
                <CardItem
                  key={product.id}
                  id={product.id}
                  filterText={filterText}
                  description={product.description}
                  name={product.name}
                  img={product.img}
                  price={product.price}
                />
              ))}
          </Section>
        )}
        {products.length !== 0 && (
          <Section title={'Sobremesas'}>
            {products
              .filter((product) => product.category === 'sobremesa')
              .filter((product) =>
                product.name.toLowerCase().includes(filterText.toLowerCase())
              )
              .map((product) => (
                <CardItem
                  key={product.id}
                  id={product.id}
                  filterText={filterText}
                  description={product.description}
                  name={product.name}
                  img={product.img}
                  price={product.price}
                />
              ))}
          </Section>
        )}
        {products.length !== 0 && (
          <Section title={'Bebidas'}>
            {products
              .filter((product) => product.category === 'bebida')
              .filter((product) =>
                product.name.toLowerCase().includes(filterText.toLowerCase())
              )
              .map((product) => (
                <CardItem
                  key={product.id}
                  id={product.id}
                  filterText={filterText}
                  description={product.description}
                  name={product.name}
                  img={product.img}
                  price={product.price}
                />
              ))}
          </Section>
        )}
      </Container>
      <Footer />
    </>
  );
}
