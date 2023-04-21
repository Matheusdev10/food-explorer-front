import { Container, Box } from './styles';
import imgHeader from '../../assets/img/imgHeader.png';
import { products } from '../../mock/products';
import { CardItem } from '../../Components/CardItem';
import { Header } from '../../Components/Header';
import { useState } from 'react';
import { Footer } from '../../Components/Footer';

import { Section } from '../../Components/Section';
export function Home() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }
  function handleSubtract() {
    setCount(count - 1);
  }
  function handleInclude() {
    setCount(count);
  }
  return (
    <>
      <Header onAddCount={handleInclude} />
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
        {/* <Section>
          {products.map((product) => (
            <CardItem
              key={product.id}
              description={product.description}
              disheName={product.disheName}
              img={product.img}
              price={product.price}
              dessertName={product.dessertName}
              drinksName={product.drinksName}
            />
          ))}
        </Section> */}

        <Section title={'Refeições'}>
          {products
            .filter((product) => product.type === 'meals')
            .map((product) => (
              <CardItem
                onAddCount={count}
                key={product.id}
                description={product.description}
                disheName={product.disheName}
                img={product.img}
                price={product.price}
              />
            ))}
        </Section>

        <Section title={'Sobremesas'}>
          {products
            .filter((product) => product.type === 'dessert')
            .map((product) => (
              <CardItem
                key={product.id}
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
            .map((product) => (
              <CardItem
                key={product.id}
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
