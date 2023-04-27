import { Container, Box } from './styles';
import imgHeader from '../../assets/img/imgHeader.png';
import { products } from '../../mock/products';
import { CardItem } from '../../Components/CardItem';
import { Header } from '../../Components/Header';
import { useState } from 'react';
import { Footer } from '../../Components/Footer';
import { Section } from '../../Components/Section';

export function Home() {
  const [filterText, setFilterText] = useState('');

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

        {/* {
          <Section title={'Refeições'}>
            {products
              .filter((product) => product.type === 'meals')
              .map((product) => (
                <CardItem
                  key={product.id}
                  filterText={filterText}
                  description={product.description}
                  disheName={product.disheName}
                  img={product.img}
                  price={product.price}
                />
              ))}
          </Section>
        } */}

        {
          <Section title={'Refeições'}>
            {products
              .filter((product) => product.type === 'meals')
              .filter((product) =>
                product.disheName
                  .toLowerCase()
                  .includes(filterText.toLowerCase())
              )
              .map((product) => (
                <CardItem
                  key={product.id}
                  filterText={filterText}
                  description={product.description}
                  disheName={product.disheName}
                  img={product.img}
                  price={product.price}
                />
              ))}
          </Section>
        }

        <Section title={'Sobremesas'}>
          {products
            .filter((product) => product.type === 'dessert')
            .filter((product) =>
              product.dessertName
                .toLowerCase()
                .includes(filterText.toLowerCase())
            )
            .map((product) => (
              <CardItem
                key={product.id}
                filterText={filterText}
                description={product.description}
                dessertName={product.dessertName}
                img={product.img}
                price={product.price}
              />
            ))}
        </Section>

        <Section title={'Bebidas'}>
          {products
            .filter((product) => product.type === 'drinks')
            .filter((product) =>
              product.drinksName
                .toLowerCase()
                .includes(filterText.toLowerCase())
            )
            .map((product) => (
              <CardItem
                key={product.id}
                filterText={filterText}
                description={product.description}
                drinksName={product.drinksName}
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
