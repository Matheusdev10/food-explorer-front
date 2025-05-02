import { FC, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BiArrowBack, BiFoodMenu } from 'react-icons/bi';
import { FiLogOut, FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import { Input } from '../Input';
import { Button, Container } from './styles';

interface IHeaderAdmin {
  filterText?: string;
  onFilterTextChange?: (value: string) => void;
}

export const HeaderAdmin: FC<IHeaderAdmin> = ({
  filterText,
  onFilterTextChange,
}) => {
  const [isClose, setIsClose] = useState(true);
  const { signOut }: any = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate('/');
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
                  <div className="newDishe">
                    <BiFoodMenu />
                    <li onClick={() => navigate('/addDishe')}>Novo prato</li>
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (onFilterTextChange) {
              onFilterTextChange(e.target.value);
            }
          }}
          placeholder="Busque por pratos ou ingredientes"
        />
      </div>
      <Button onClick={() => navigate('/addDishe')}>Novo prato</Button>
      <button className="logOff" onClick={handleSignOut}>
        <FiLogOut />
      </button>
    </Container>
  );
};
