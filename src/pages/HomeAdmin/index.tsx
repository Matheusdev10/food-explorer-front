import { useEffect, useState } from 'react';
import { TProduct } from '../../@types/products';
import imgHeader from '../../assets/img/imgHeader.png';
import { CardItemAdmin } from '../../Components/CardItemAdmin';
import { Footer } from '../../Components/Footer';
import { HeaderAdmin } from '../../Components/HeaderAdmin';
import { Section } from '../../Components/Section';
import { getProducts } from '../../store/apis/productsApi/endpoints/getProducts';
import { Box, Container } from './styles';

export const HomeAdmin = () => {
  const [filterText, setFilterText] = useState('');
  const [load, setLoad] = useState(true);
  const [error, setError] = useState('');
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    async function asyncGetProducts() {
      try {
        const response = await getProducts();
        setProducts(response);
      } catch (error) {
        setError('Api fora do ar');
      } finally {
        setLoad(false);
      }
    }

    asyncGetProducts();
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

        {products.length !== 0 && (
          <Section title={'Refeições'}>
            {products
              .filter((product) => product.category === 'refeição')
              .filter((product) =>
                product.name.toLowerCase().includes(filterText.toLowerCase())
              )
              .map((product) => (
                <CardItemAdmin key={product.id} product={product} />
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
                <CardItemAdmin key={product.id} product={product} />
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
                <CardItemAdmin key={product.id} product={product} />
              ))}
          </Section>
        )}
      </Container>
      <Footer />
    </>
  );
};
