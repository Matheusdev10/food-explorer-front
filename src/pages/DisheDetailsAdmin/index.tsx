// import { AxiosError } from 'axios';
// import { useEffect, useState } from 'react';
// import { FaAngleLeft } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import { TProduct } from '../../@types/products';
// import { Button } from '../../Components/Button';
// import { Footer } from '../../Components/Footer';
// import { HeaderAdmin } from '../../Components/HeaderAdmin';
// import { TagItem } from '../../Components/TagItem';
// import { api } from '../../store/apis/index';
// import { editProduct } from '../../store/apis/productsApi/endpoints/getProducts';
// import { Box, Container } from './styles';

// export const DisheDetailsAdmin = () => {
//   const [data, setData] = useState<TProduct>({
//     id: 0,
//     img: '',
//     category: '',
//     name: '',
//     price: 0,
//     description: '',
//     tags: [],
//   });
//   const navigate = useNavigate();

//   async function handleDisheDetailsAdmin() {
//     try {
//       const response = await editProduct(data.id, data);
//       setData(response.data);
//     } catch (err) {
//       const error = err as AxiosError<{ message: string }>;
//       console.log(error.response?.data);
//     }
//   }
//   useEffect(() => {
//     handleDisheDetailsAdmin();
//   }, []);

//   function handleBack() {
//     navigate(-1);
//   }

//   return (
//     <>
//       <HeaderAdmin />
//       <Container>
//         <div className="dishe">
//           <div className="back">
//             <FaAngleLeft />
//             <p onClick={handleBack}>voltar</p>
//           </div>
//           <div className="imageDishe">
//             <img
//               src={`${api.defaults.baseURL}/files/${data && data.img}`}
//               alt="img dos pratos"
//             />
//           </div>
//         </div>

//         <Box>
//           <section>
//             <h2>{data && data.name}</h2>
//             <p>{data && data.description}</p>
//             {data && data.tags.map((tag) => <TagItem title={tag} key={tag} />)}
//           </section>

//           <div
//             onClick={() => navigate(`/editDishe/${data.id}`)}
//             className="btn"
//           >
//             <Button title={'Editar prato'} />
//           </div>
//         </Box>
//       </Container>
//       <Footer />
//     </>
//   );
// };

import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { TProduct } from '../../@types/products';
import { Button } from '../../Components/Button';
import { Footer } from '../../Components/Footer';
import { HeaderAdmin } from '../../Components/HeaderAdmin';
import { TagItem } from '../../Components/TagItem';
import { api } from '../../store/apis/index';
import { getProductById } from '../../store/apis/productsApi/endpoints/getProducts';
import { Box, Container } from './styles';

export function DisheDetailsAdmin() {
  const [data, setData] = useState<TProduct | null>(null);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function handleDisheDetailsAdmin() {
      try {
        if (!params.id) return;
        const product = await getProductById(params.id);
        setData(product);
      } catch (err) {
        const error = err as AxiosError<{ message: string }>;
        console.log(error.response?.data);
      }
    }
    handleDisheDetailsAdmin();
  }, [params.id]);

  function handleBack() {
    navigate(-1);
  }

  return (
    <>
      <HeaderAdmin />
      <Container>
        <div className="dishe">
          <div className="back">
            <FaAngleLeft />
            <p onClick={handleBack}>voltar</p>
          </div>
          <div className="imageDishe">
            <img
              src={`${api.defaults.baseURL}/files/${data && data.img}`}
              alt="img dos pratos"
            />
          </div>
        </div>

        <Box>
          <section>
            <h2>{data && data.name}</h2>
            <p>{data && data.description}</p>
            {data && data.tags.map((tag) => <TagItem title={tag} key={tag} />)}
          </section>

          <div
            onClick={() => navigate(`/editDishe/${params.id}`)}
            className="btn"
          >
            <Button title={'Editar prato'} />
          </div>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
