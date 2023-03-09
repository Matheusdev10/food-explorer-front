import { Container } from './styles';
import Logo from '../../assets/logoFooter.svg';
import { BiCopyright } from 'react-icons/bi';

export function Footer() {
  return (
    <Container>
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <h1>food explorer</h1>
      </div>

      <div className="rights">
        <BiCopyright />
        <p>2023 - Todos os direitos reservados</p>
      </div>
    </Container>
  );
}
