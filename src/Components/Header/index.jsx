import { FiSearch, FiLogOut } from 'react-icons/fi';
import { Container } from './styles';
import Logo from '../../assets/logo.svg';
import { Receipt } from 'phosphor-react';
import { Input } from '../Input';
import { Button } from './styles';

export function Header() {
  return (
    <Container>
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <h1>food explorer</h1>
      </div>
      <button className="favoriteButton">Meus favoritos</button>
      <Input
        className="input"
        icon={FiSearch}
        placeholder="Busque pelas opções de pratos"
      />

      <Button>
        <Receipt size={32} />
        Meus pedidos (0)
      </Button>

      <button className="logOff">
        <FiLogOut />
      </button>
    </Container>
  );
}
