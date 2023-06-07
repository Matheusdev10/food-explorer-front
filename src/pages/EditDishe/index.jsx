import { FaAngleLeft } from 'react-icons/fa';
import { BsUpload } from 'react-icons/bs';
import { Footer } from '../../Components/Footer';
import { Container, Form } from './styles';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { HeaderAdmin } from '../../Components/HeaderAdmin';
import { AddIngredients } from '../../Components/AddIngredients';
import { TextArea } from '../../Components/TextArea';
import { useNavigate } from 'react-router-dom';

export function EditDishe() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: 'matheus',
      category: 'bebida',
      price: 150,
      description: 'teste',
    },
  });
  const onSubmit = (data) => console.log(data);

  const navigate = useNavigate();
  return (
    <>
      <HeaderAdmin />
      <Container>
        <div onClick={() => navigate('/homeAdmin')} className="back">
          <FaAngleLeft size={24} />
          <p>voltar</p>
        </div>
        <h1>Editar prato</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
              <input
                {...register('name')}
                type="text"
                placeholder="Salada Ceasar"
                id="name"
              />
            </div>
          </div>
          <div className="col-3">
            <label for="category">Categoria</label>
            <select {...register('category')} id="category" name="category">
              <option value="">Selecione uma categoria</option>
              <option value="refeição">Refeição</option>
              <option value="sobremesa">Sobremesa</option>
              <option value="bebida">Bebida</option>
            </select>
          </div>

          <div className="col-4">
            <label htmlFor="addDishes">Ingredientes</label>
            <div className="tags">
              {/* <AddIngredients value="Pão Naan" /> */}
              <AddIngredients
                isNew
                placeholder="Adicionar"
                name={'tags'}
                register={register}
              />
            </div>
          </div>
          <div className="col-5">
            <label htmlFor="price">Preço</label>
            <div className="input">
              <input
                {...register('price')}
                type="number"
                placeholder="R$ 00,00"
                id="price"
              />
            </div>
          </div>

          <div className="col-6">
            <label htmlFor="textArea">Descrição</label>

            <div className="input">
              <TextArea
                name={'description'}
                register={register}
                placeholder="A Salada Ceasar é uma opção refrescante para o verão."
                id="description"
              />
            </div>
          </div>
          <div className="button">
            <div className="btn-delete">
              <button>Excluir prato</button>
            </div>
            <div className="btn">
              <button type="submit">Salvar Alterações</button>
            </div>
          </div>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
