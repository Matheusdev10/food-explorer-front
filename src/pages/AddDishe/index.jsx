import { FaAngleLeft } from 'react-icons/fa';
import { BsUpload } from 'react-icons/bs';
import { Footer } from '../../Components/Footer';
import { Container, Form } from './styles';
import { api } from '../../services/api';
// import { useForm } from 'react-hook-form';
import { HeaderAdmin } from '../../Components/HeaderAdmin';
import { AddIngredients } from '../../Components/AddIngredients';
import { TextArea } from '../../Components/TextArea';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function AddDishe() {
  // const { register, handleSubmit } = useForm();
  // const onSubmit = (data) => console.log(data);

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');
  const [imgFile, setImgFile] = useState(null);

  function handleImgFile(event) {
    const imgfile = event.target.files[0];
    setImgFile(imgfile);
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }
  async function handleNewProduct() {
    try {
      const payLoad = new FormData();

      payLoad.append('img', imgFile);
      payLoad.append('name', name);
      payLoad.append('category', category);
      payLoad.append('description', description);
      payLoad.append('tags', tags);
      payLoad.append('price', price);

      await api.post('/products', payLoad);

      alert('Produto cadastrado com sucesso');
      // navigate('/');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível cadastrar');
      }
    }
  }

  return (
    <>
      <HeaderAdmin />
      <Container>
        <div onClick={() => navigate('/disheDetailsAdmin')} className="back">
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
              <input
                type="file"
                className="imageDishe"
                id="imageDishe"
                onChange={handleImgFile}
              />
            </div>
          </div>
          <div className="col-2">
            <label htmlFor="Name">Nome</label>
            <div className="input">
              <input
                type="text"
                placeholder="Ex: Salada Ceasar"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="col-3">
            <label for="category">Categoria</label>
            <select
              id="category"
              name="category"
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="">Selecione uma categoria</option>
              <option value="refeição">Refeição</option>
              <option value="sobremesa">Sobremesa</option>
              <option value="bebida">Bebida</option>
            </select>
          </div>
          <div className="col-4">
            <label htmlFor="addDishes">Ingredientes</label>

            <div className="tags">
              {tags.map((tag, index) => (
                <AddIngredients
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}

              <AddIngredients
                isNew
                placeholder="Adicionar"
                onChange={(e) => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </div>
          <div className="col-5">
            <label htmlFor="price">Preço</label>
            <div className="input">
              <input
                type="number"
                placeholder="R$ 00,00"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="col-6">
            <label htmlFor="textArea">Descrição</label>

            <div className="input">
              <TextArea
                name={'description'}
                // register={register}
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                id="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="btn">
            <button type="submit" onClick={handleNewProduct}>
              Salvar Alterações
            </button>
          </div>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
