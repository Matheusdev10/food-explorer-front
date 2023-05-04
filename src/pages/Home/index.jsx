import { Container, Box } from './styles';
import imgHeader from '../../assets/img/imgHeader.png';
import { products } from '../../mock/products';
import { CardItem } from '../../Components/CardItem';
import { Header } from '../../Components/Header';
import { useState } from 'react';
import { Footer } from '../../Components/Footer';
import { Section } from '../../Components/Section';
import { handleFilter } from '../../utils/handleFilter';

export function Home() {
  const [filterText, setFilterText] = useState('');
  const meals = handleFilter('meals', 'disheName', filterText, products);
  const desserts = handleFilter('dessert', 'dessertName', filterText, products);
  const drinks = handleFilter('drinks', 'drinksName', filterText, products);

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

        {meals.length !== 0 && (
          <Section title={'Refeições'}>
            {meals.map((product) => (
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
        )}
        {desserts.length !== 0 && (
          <Section title={'Sobremesas'}>
            {desserts.map((product) => (
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
        )}
        {drinks.length !== 0 && (
          <Section title={'Bebidas'}>
            {drinks.map((product) => (
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
        )}
      </Container>
      <Footer />
    </>
  );
}
