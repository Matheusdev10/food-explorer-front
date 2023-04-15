import { Container, Box } from './styles';
import imgHeader from '../../assets/img/imgHeader.png';
import { products } from '../../mock/products';
import { CardItem } from '../../Components/CardItem';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { titles } from '../../mock/title';
import { Section } from '../../Components/Section';
export function Home() {
  return (
    <>
      <Header />
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

        <Section title={'Pratos principais'}>
          {products
            .filter((product) => product.type == 'mainDishes')
            .map((product) => (
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
        </Section>

        <Section title={'Sobremesas'}>
          {products
            .filter((product) => product.type == 'dessert')
            .map((product) => (
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
        </Section>

        <Section title={'Bebidas'}>
          {products
            .filter((product) => product.type == 'drinks')
            .map((product) => (
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
        </Section>
      </Container>
      <Footer />
    </>
  );
}
