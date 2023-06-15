import { FiSearch, FiLogOut } from 'react-icons/fi';
import { Container } from './styles';
import Logo from '../../assets/logo.svg';
import { Input } from '../Input';
import { Button } from './styles';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

export function HeaderAdmin({ filterText, onFilterTextChange }) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate('/');
    signOut();
  }

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
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
        placeholder="Busque por pratos ou ingredientes"
      />
      <Button onClick={() => navigate('/addDishe')}>Novo prato</Button>
      <button className="logOff" onClick={handleSignOut}>
        <FiLogOut />
      </button>
    </Container>
  );
}
