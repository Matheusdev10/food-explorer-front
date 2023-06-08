import { Button } from '../Button';
import { Box } from './styles';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaAngleRight } from 'react-icons/fa';
import iconEdit from '../../assets/iconEdit.svg';
import { useNavigate } from 'react-router-dom';
import formatterMoney from '../../utils/formatterMoney';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function CardItemAdmin({ img, name, description, price }) {
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <img
          onClick={() => navigate('/EditDishe')}
          src={iconEdit}
          alt="imagem de um icone a direita em formato de coração"
        />

        <div onClick={() => navigate('/DisheDetailsAdmin')} className="content">
          <img src={img} alt="imagem de uma comida feita de camarão" />
        </div>
        <h4>
          {name}
          <FaAngleRight />
        </h4>
        <p>{description}</p>
        <span>{`${formatterMoney(price)}`}</span>
      </Box>
    </>
  );
}
