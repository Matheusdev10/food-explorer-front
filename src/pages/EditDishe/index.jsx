import { FaAngleLeft } from 'react-icons/fa';
import { BsUpload } from 'react-icons/bs';
import { Footer } from '../../Components/Footer';
import { Container, Form } from './styles';
import { api } from '../../services/api';

// import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { HeaderAdmin } from '../../Components/HeaderAdmin';
import { AddIngredients } from '../../Components/AddIngredients';
import { TextArea } from '../../Components/TextArea';
import { useNavigate, useParams } from 'react-router-dom';

export function EditDishe() {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  // useEffect(() => {
  //   async function getProducts() {
  //     const response = await api.get(`/products/${params.id}`);
  //     const { category, img, name, price, description, tags } = response.data;
  //     setCategory(category);
  //     setImgFile(img);
  //     setName(name);
  //     setPrice(price);
  //     setDescription(description);
  //     setTags(tags.map((tag) => tag));
  //   }

  //   getProducts();
  // }, []);

  async function handleGetProducts() {
    try {
      const response = await api.get(`/products/${params.id}`);
      const { category, img, name, price, description, tags } = response.data;
      setCategory(category);
      setImgFile(img);
      setName(name);
      setPrice(price);
      setDescription(description);
      setTags(tags.map((tag) => tag));
    } catch (error) {
      console.log(error.data);
    }
  }
  useEffect(() => {
    handleGetProducts();
  }, []);

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

  const formData = new FormData();
  formData.append('img', imgFile);

  async function handleEditProduct() {
    try {
      api.put(`/products/${params.id}`, {
        name,
        category,
        price,
        description,
        tags,
      });
      const payLoad = new FormData();

      payLoad.append('img', imgFile);
      await api.patch(`/products/img/${params.id}`, payLoad);
      alert('Produto editado com sucesso');
      // navigate('/');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível editar o prato');
      }
    }
  }

  async function handleDelete() {
    try {
      const confirm = window.confirm(
        'Voce realmente deseja deletar este prato?'
      );

      if (confirm) {
        await api.delete(`/products/${params.id}`);
        alert('Prato deletado com sucesso!');
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  }

  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     name: 'matheus',
  //     category: 'bebida',
  //     price: 150,
  //     description: 'teste',
  //   },
  // });
  // const onSubmit = (data) => console.log(data);

  return (
    <>
      <HeaderAdmin />
      <Container>
        <div onClick={() => navigate('/')} className="back">
          <FaAngleLeft size={24} />
          <p>voltar</p>
        </div>
        <h1>Editar prato</h1>
        <Form

        // onSubmit={handleSubmit(onSubmit)}
        >
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
                // {...register('name')}
                type="text"
                placeholder="Salada Ceasar"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </div>
          <div className="col-3">
            <label for="category">Categoria</label>
            <select
              // {...register('category')}
              onChange={(event) => setCategory(event.target.value)}
              id="category"
              value={category}
              name={data && data.category}
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
                // {...register('price')}
                type="number"
                placeholder="R$ 00,00"
                id="price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </div>
          </div>

          <div className="col-6">
            <label htmlFor="textArea">Descrição</label>

            <div className="input">
              <TextArea
                name=""
                id=""
                placeholder="A Salada Ceasar é uma opção refrescante para o verão."
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
          </div>
          <div className="button">
            <div className="btn-delete">
              <button onClick={handleDelete}>Excluir prato</button>
            </div>
            <div className="btn">
              <button onClick={handleEditProduct} type="submit">
                Salvar Alterações
              </button>
            </div>
          </div>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
