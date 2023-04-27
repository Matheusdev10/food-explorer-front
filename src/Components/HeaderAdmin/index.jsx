import { FiSearch, FiLogOut } from 'react-icons/fi';
import { Container } from './styles';
import Logo from '../../assets/logo.svg';
import { Input } from '../Input';
import { Button } from './styles';
import { useNavigate } from 'react-router-dom';

export function HeaderAdmin() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="logo">
        <img src={Logo} alt="Logo azul em formato de hexagono" />
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
      <Button onClick={() => navigate('/addDishe')}>Novo prato</Button>
      <button onClick={() => navigate('/')} className="logOff">
        <FiLogOut />
      </button>
    </Container>
  );
}
