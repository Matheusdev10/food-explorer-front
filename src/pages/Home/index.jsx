// import { Container, Box } from './styles';
// import imgHeader from '../../assets/img/imgHeader.png';
// import { products } from '../../mock/products';
// import { CardItem } from '../../Components/CardItem';
// import { Header } from '../../Components/Header';
// import { useState, useEffect } from 'react';
// import { Footer } from '../../Components/Footer';
// import { Section } from '../../Components/Section';
// import { handleFilter } from '../../utils/handleFilter';
// // import { useParams } from 'react-router-dom';
// import { useAuth } from '../../hooks/auth';
// import { api } from '../../services/api';

// export function Home() {
//   // const params = useParams();
//   const { user } = useAuth();
//   const [filterText, setFilterText] = useState('');
//   const [products, setProducts] = useState([]);
//   const [load, setLoad] = useState(true);
//   const [error, setError] = useState('');

//   async function getApiData() {
//     try {
//       const response = await api.get('/products');

//       setProducts(response.data);
//     } catch (error) {
//       setError('Api fora do ar');
//     } finally {
//       setLoad(false);
//     }
//   }
//   useEffect(() => {
//     getApiData();
//   }, []);

//   if (load) {
//     return <h1>...carregando</h1>;
//   }
//   if (error) {
//     return <h1>{error}</h1>;
//   }

//   return (
//     <>
//       <Header filterText={filterText} onFilterTextChange={setFilterText} />
//       <Container>
//         <Box>
//           <div>
//             <img src={imgHeader} alt="logo header" />
//           </div>
//           <div>
//             <h1>Sabores inigualáveis</h1>
//             <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
//           </div>
//         </Box>
//         <Section title="Refeições">
//           {user.is_admin == 1 && <CardItem />}
//           {products
//             .filter(
//               (product) => product.category == 'refeição',
//               console.log(products)
//             )

//             .map((product) => (
//               <CardItem key={String(product.id)} data={product} />
//             ))}
//         </Section>

//         <Section title="Sobremesas">
//           {user.is_admin == 1 && <CardItem />}
//           {products
//             .filter(
//               (product) => product.category == 'sobremesa',
//               console.log(products)
//             )
//             .map((product) => (
//               <CardItem key={String(product.id)} data={product} />
//             ))}
//         </Section>

//         <Section title="Bebidas">
//           {user.is_admin == 1 && <CardItem />}

//           {products

//             .filter((product) => product.category == 'bebida')
//             .map((product) => (
//               <CardItem key={String(product.id)} data={product} />
//             ))}
//         </Section>
//       </Container>
//       <Footer />
//     </>
//   );
// }

//codigo de funciona sem chamada api
import { Container, Box } from './styles';
import imgHeader from '../../assets/img/imgHeader.png';
import { products } from '../../mock/products';
import { CardItem } from '../../Components/CardItem';
import { Header } from '../../Components/Header';
import { useState } from 'react';
import { Footer } from '../../Components/Footer';
import { api } from '../../services/api';

import { Section } from '../../Components/Section';

export function Home() {
  return (
    <>
      <Header />
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
        <Section title={'Refeições'}>
          {products
            .filter((product) => product.type === 'meals')
            .map((product) => (
              <CardItem
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
