import { FiSearch, FiLogOut } from 'react-icons/fi';
import { Container } from './styles';
import Logo from '../../assets/logo.svg';
import { Receipt } from 'phosphor-react';
import { Input } from '../Input';
import { Button } from './styles';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import iconPedido from '../../assets/iconPedido.png';

import { useAuth } from '../../hooks/auth';

export function Header({ filterText, onFilterTextChange }) {
  const [count, setCount] = useState(0);
  const [isClose, setIsClose] = useState(true);
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const navigation = useNavigate();

  function handleSignOut() {
    navigation('/');
    signOut();
  }

  return (
    <Container>
      <div className="logo">
        <div className="iconCloseAndMenu">
          {isClose ? (
            <AiOutlineMenu
              onClick={() => setIsClose(false)}
              size={25}
              opacity={1}
            />
          ) : (
            <>
              <AiOutlineClose onClick={() => setIsClose(true)} size={25} />
              <div className="modalMobile">
                <ul>
                  <div className="back">
                    <BiArrowBack />
                    <li onClick={() => navigate('/')}>Voltar</li>
                  </div>
                </ul>
                <ul>
                  <div className="exit">
                    <FiLogOut />
                    <li onClick={() => signOut()}>Sair</li>
                  </div>
                </ul>
              </div>
            </>
          )}
        </div>
        <div className="iconLogoText">
          <img src={Logo} alt="Logo azul em formato de hexagono" />
          <h1>food explorer</h1>
        </div>
        <div className="iconPedido">
          <img src={iconPedido} alt="img do icone de pedido do header" />
        </div>
      </div>
      <div className="input">
        <Input
          className="input"
          value={filterText}
          icon={FiSearch}
          onChange={(e) => onFilterTextChange(e.target.value)}
          placeholder="Busque por pratos ou ingredientes"
        />
      </div>
      <Button handleCount={count}>
        <Receipt size={32} />
        {`Meus pedidos (${count})`}
      </Button>

      <button className="logOff" onClick={handleSignOut}>
        <FiLogOut />
      </button>
    </Container>
  );
}
