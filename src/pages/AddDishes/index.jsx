import { FaAngleLeft } from 'react-icons/fa';
import { BsUpload } from 'react-icons/bs';
import { Footer } from '../../Components/Footer';
import { Input } from '../../Components/Input';
import { Container, Form } from './styles';
import { HeaderAdmin } from '../../Components/HeaderAdmin';
import { AddIngredients } from '../../Components/AddIngredients';

export function AddDishes() {
  return (
    <>
      <HeaderAdmin />
      <Container>
        <div className="back">
          <FaAngleLeft size={24} />
          <p>voltar</p>
        </div>
        <h1>Adicionar prato</h1>
        <Form>
          <div className="col-1">
            <p>Imagem do prato</p>
            <label htmlFor="imageDishe">Selecione imagem</label>
            <div className="input">
              <BsUpload />
              <input type="file" className="imageDishe" id="imageDishe" />
            </div>
          </div>
          <div className="col-2">
            <label htmlFor="Name">Nome</label>
            <div className="input">
              <input type="text" placeholder="Ex: Salada Ceasar" />
            </div>
          </div>
          <div className="col-3">
            <div className="dropbown">
              <p>Categoria</p>
              <div className="select">
                <span className="selected">Refeição</span>
                <div className="caret"></div>
              </div>
              <ul className="menu">
                <li>Sobremesa</li>
                <li>Bebida</li>
              </ul>
            </div>
          </div>
          <div className="col-4">
            <label htmlFor="addDishes">Ingredientes</label>
            <div className="tags">
              <AddIngredients value="Pão Naan" />
              <AddIngredients isNew placeholder="Adicionar" />
            </div>
          </div>
          <div className="col-5">
            <label htmlFor="price">Preço</label>
            <div className="input">
              <input type="number" placeholder="R$ 00,00" id="price" />
            </div>
          </div>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
