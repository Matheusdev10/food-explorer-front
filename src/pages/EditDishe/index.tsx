import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { BsUpload } from 'react-icons/bs';
import { FaAngleLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { TProduct } from '../../@types/products';
import { AddIngredients } from '../../Components/AddIngredients';
import { Footer } from '../../Components/Footer';
import { HeaderAdmin } from '../../Components/HeaderAdmin';
import { TextArea } from '../../Components/TextArea';
import { api } from '../../store/apis/index';
import {
  editProduct,
  getProductById,
} from '../../store/apis/productsApi/endpoints/getProducts';
import { Container, Form } from './styles';

export const EditDishe = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<TProduct | undefined>(undefined);
  const [name, setName] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [price, setPrice] = useState<number>();
  const [description, setDescription] = useState<string>('');
  const [tags, setTags] = useState<Array<string>>([]);
  const [newTag, setNewTag] = useState<string>('');
  const [imgFile, setImgFile] = useState<File | null>(null);

  async function handleGetProducts() {
    try {
      if (!params.id) return;
      const response = await getProductById(params.id);
      const { category, name, price, description, tags } = response;
      setCategory(category);
      setName(name);
      setPrice(price);
      setDescription(description);
      setTags(tags.map((tag) => tag));
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;

      console.log(error.response?.data);
    }
  }
  useEffect(() => {
    handleGetProducts();
  }, []);

  const handleImgFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imgfile = event.target.files?.[0];
    if (imgfile) {
      setImgFile(imgfile);
    }
  };
  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag('');
  }

  function handleRemoveTag(deleted: string) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  const formData = new FormData();
  if (imgFile) {
    formData.append('img', imgFile);
  }

  async function handleEditProduct() {
    try {
      if (!params.id) return;
      const updatedProduct = await editProduct(params.id, {
        name,
        category,
        price,
        description,
        tags: tags.toString(),
      });
      setData(updatedProduct);

      if (imgFile) {
        const payLoad = new FormData();
        payLoad.append('img', imgFile);
        await api.patch(`/products/img/${params.id}`, payLoad);
      }

      alert('Produto editado com sucesso');
      navigate('/');
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
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

  function handleBack() {
    navigate(-1);
  }

  const handleSetPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPrice(Number(value));
  };

  const handleSetDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          <h1>Editar prato</h1>
        </div>
        <Form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
          }}
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
                type="text"
                placeholder="Salada Ceasar"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </div>
          <div className="col-3">
            <label htmlFor="category">Categoria</label>
            <select
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
                type="number"
                placeholder="R$ 00,00"
                id="price"
                value={price}
                onChange={handleSetPrice}
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
                onChange={handleSetDescription}
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
};
