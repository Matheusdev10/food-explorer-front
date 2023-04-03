import { FiSearch, FiLogOut } from 'react-icons/fi';
import { Container } from './styles';
import Logo from '../../assets/logo.svg';
import { Input } from '../Input';
import { Button } from './styles';

export function HeaderAdmin() {
  return (
    <Container>
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <div className="text">
          <h1>food explorer</h1>
          <p>admin</p>
        </div>
      </div>

      <Input
        className="input"
        icon={FiSearch}
        placeholder="Busque por pratos ou ingredientes"
      />
      <Button>Novo prato</Button>
      <button className="logOff">
        <FiLogOut />
      </button>
    </Container>
  );
}
