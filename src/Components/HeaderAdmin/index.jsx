import { FiSearch, FiLogOut } from 'react-icons/fi';
import { Container } from './styles';
import Logo from '../../assets/logo.svg';
import { Input } from '../Input';
import { Button } from './styles';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

export function HeaderAdmin({ filterText, onFilterTextChange }) {
  const [isClose, setIsClose] = useState(false);
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate('/');
    signOut();
  }

  return (
    <Container>
      <div className="logo">
        <div className="menu">
          {isClose ? (
            <AiOutlineMenu
              onClick={() => setIsClose(false)}
              size={25}
              opacity={1}
            />
          ) : (
            <AiOutlineClose onClick={() => setIsClose(true)} size={25} />
          )}
        </div>
        <div className="box">
          <div className="imgLogo">
            <img src={Logo} alt="Logo azul em formato de hexagono" />
          </div>
          <div className="text">
            <h1>food explorer</h1>
            <p>admin</p>
          </div>
        </div>
      </div>
      <div className="input">
        <Input
          icon={FiSearch}
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
          placeholder="Busque por pratos ou ingredientes"
        />
      </div>
      <Button onClick={() => navigate('/addDishe')}>Novo prato</Button>
      <button className="logOff" onClick={handleSignOut}>
        <FiLogOut />
      </button>
    </Container>
  );
}
