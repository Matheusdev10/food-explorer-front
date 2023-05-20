import { Container, Box } from './styles';
import imgHeader from '../../assets/img/imgHeader.png';
import { products } from '../../mock/products';
import { CardItemAdmin } from '../../Components/CardItemAdmin';
import { Footer } from '../../Components/Footer';
import { HeaderAdmin } from '../../Components/HeaderAdmin';
import { Section } from '../../Components/Section';

export function HomeAdmin() {
  return (
    <>
      <HeaderAdmin />
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
        {/* 
        <Section title={'Refeições'}>
          {products
            .filter((product) => product.type === 'meals')

            .map((product) => (
              <CardItemAdmin
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
              <CardItemAdmin
                key={product.id}
                description={product.description}
                dessertName={product.dessertName}
                img={product.img}
                price={product.price}
              />
            ))}
        </Section>

        <Section title="Bebidas">
          {products
            .filter((product) => product.type === 'drinks')
            .map((product) => (
              <CardItemAdmin
                key={product.id}
                description={product.description}
                drinksName={product.drinksName}
                img={product.img}
                price={product.price}
              />
            ))}
        </Section> */}
      </Container>
      <Footer />
    </>
  );
}
