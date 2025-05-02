import { Receipt } from 'phosphor-react';
import { FC, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { FiLogOut, FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import iconPedido from '../../assets/iconPedido.png';
import Logo from '../../assets/logo.svg';
import { Input } from '../Input';
import { Button, Container } from './styles';

import { useAuth } from '../../hooks/auth';

interface IHeader {
  filterText: string;
  onFilterTextChange: (value: string) => void;
}

export const Header: FC<IHeader> = ({ filterText, onFilterTextChange }) => {
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
      <Button>
        <Receipt size={32} />
        {`Meus pedidos (${0})`}
      </Button>

      <button className="logOff" onClick={handleSignOut}>
        <FiLogOut />
      </button>
    </Container>
  );
};
