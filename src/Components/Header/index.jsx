import { FiSearch, FiLogOut } from 'react-icons/fi';
import { Container } from './styles';
import Logo from '../../assets/logo.svg';
import { Receipt } from 'phosphor-react';
import { Input } from '../Input';
import { Button } from './styles';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../mock/products';

export function Header({ filterText, onFilterTextChange }) {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <div className="logo">
        <img src={Logo} alt="Logo azul em formato de hexagono" />
        <h1>food explorer</h1>
      </div>
      <Input
        className="input"
        value={filterText}
        icon={FiSearch}
        onChange={(e) => onFilterTextChange(e.target.value)}
        placeholder="Busque por pratos ou ingredientes"
      />

      <Button handleCount={count}>
        <Receipt size={32} />
        {`Meus pedidos (${count})`}
      </Button>

      <button className="logOff">
        <Link to={'/'}>
          <FiLogOut />
        </Link>
      </button>
    </Container>
  );
}
