import { FaAngleLeft } from 'react-icons/fa';
import { Footer } from '../../Components/Footer';
import { Input } from '../../Components/Input';
import { Container, Form } from './styles';
import { HeaderAdmin } from '../../Components/HeaderAdmin';

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
            <label htmlFor="imagem do prato"></label>
            <label htmlFor="imagem do prato">imagem do prato</label>
            <div className="input">
              <Input type="text" id="Text" placeholder="selecione imagem" />
            </div>
          </div>

          <div className="col-2">
            <label htmlFor="Name"></label>
            <label htmlFor="Name">Nome</label>
            <div className="input">
              <Input type="text" id="Name" placeholder="Ex: Salada Ceasar" />
            </div>
          </div>

          <div className="col-3">
            <label htmlFor="category"></label>
            <label htmlFor="category">Categoria</label>
            <div className="input">
              <Input type="text" id="Category" placeholder="Refeição" />
            </div>
          </div>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
