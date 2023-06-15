import { Container, Box } from './styles';
import imgHeader from '../../assets/img/imgHeader.png';
import { Footer } from '../../Components/Footer';
import { HeaderAdmin } from '../../Components/HeaderAdmin';
import { CardItemAdmin } from '../../Components/CardItemAdmin';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { Section } from '../../Components/Section';

export function HomeAdmin() {
  const [filterText, setFilterText] = useState('');
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState('');

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
      <HeaderAdmin filterText={filterText} onFilterTextChange={setFilterText} />
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

        {products.length !== 0 && (
          <Section title={'Refeições'}>
            {products
              .filter((product) => product.category === 'refeição')
              .filter((product) =>
                product.name.toLowerCase().includes(filterText.toLowerCase())
              )
              .map((product) => (
                <CardItemAdmin
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
                <CardItemAdmin
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
                <CardItemAdmin
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
