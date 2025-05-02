import { AxiosError } from 'axios';
import { useState } from 'react';
import { BsUpload } from 'react-icons/bs';
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AddIngredients } from '../../Components/AddIngredients';
import { Footer } from '../../Components/Footer';
import { HeaderAdmin } from '../../Components/HeaderAdmin';
import { TextArea } from '../../Components/TextArea';
import { api } from '../../store/apis/index';
import { Container, Form } from './styles';

export const AddDishe = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [price, setPrice] = useState<number>();
  const [description, setDescription] = useState<string>('');
  const [tags, setTags] = useState<Array<string>>([]);
  const [newTag, setNewTag] = useState<string>('');
  const [imgFile, setImgFile] = useState<File | null>(null);

  function handleImgFile(event: React.ChangeEvent<HTMLInputElement>) {
    const imgfile = event.target.files?.[0];
    if (imgfile) {
      setImgFile(imgfile);
    }
  }

  console.log(tags, 'tags');
  function handleAddTag() {
    console.log(newTag, 'newTag');
    setTags((prevState) => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(deleted: string) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewProduct() {
    try {
      if (!imgFile) {
        alert('Selecione uma imagem');
        return;
      }
      const payLoad = new FormData();

      payLoad.append('img', imgFile);
      payLoad.append('name', name);
      payLoad.append('category', category);
      payLoad.append('description', description);
      payLoad.append('tags', String(tags));
      payLoad.append('price', String(price ?? 0));
      await api.post('/products', payLoad);
      alert('Produto cadastrado com sucesso');
      navigate('/');
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível cadastrar');
      }
    }
  }

  function handleBack() {
    navigate(-1);
  }

  function handleChangePrice(e: React.ChangeEvent<HTMLInputElement>) {
    const value = parseFloat(e.target.value);
    setPrice(isNaN(value) ? 0 : value);
  }

  const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDescription(value);
  };

  return (
    <>
      <HeaderAdmin />
      <Container>
        <div className="box">
          <div onClick={handleBack} className="back">
            <FaAngleLeft size={24} />
            <p>voltar</p>
          </div>
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
            <label htmlFor="category">Categoria</label>
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
                onChange={handleChangePrice}
              />
            </div>
          </div>
          <div className="col-6">
            <label htmlFor="textArea">Descrição</label>

            <div className="input">
              <TextArea
                name={'description'}
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                id="description"
                onChange={handleDescription}
              />
            </div>
          </div>

          <div
            // onClick={notify}
            className="btn"
          >
            <button type="button" onClick={handleNewProduct}>
              Salvar Alterações
            </button>
          </div>
        </Form>
      </Container>
      <Footer />
    </>
  );
};
