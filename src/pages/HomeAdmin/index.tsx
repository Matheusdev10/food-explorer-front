import { Container, Box } from './styles';
import imgHeader from '../../assets/img/imgHeader.png';
import { Footer } from '../../Components/Footer';
import { HeaderAdmin } from '../../Components/HeaderAdmin';
import { CardItemAdmin } from '../../Components/CardItemAdmin';
import { useState, useEffect } from 'react';
import { api } from '../../store/apis/index';
import { Section } from '../../Components/Section';
import { TProduct } from '../../@types/products';
import React from 'react';
import { getProducts } from '../../store/apis/productsApi/endpoints/getProducts';

export const HomeAdmin = () => {
  const [filterText, setFilterText] = useState('');
  const [product, setProduct] = useState<Array<TProduct>>([]);
  const [load, setLoad] = useState(true);
  const [error, setError] = useState('');

  async function getProducts() {
    try {
      const response = await getProducts();

      setProduct(response.data);
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
          <div className="img">
            <img src={imgHeader} alt="logo header" />
          </div>
          <div className="card">
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Box>

        {product.length !== 0 && (
          <Section title={'Refeições'}>
            {product
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

        {product.length !== 0 && (
          <Section title={'Sobremesas'}>
            {product
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

        {product.length !== 0 && (
          <Section title={'Bebidas'}>
            {product
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
};
