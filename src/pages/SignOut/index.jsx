import { Container } from './styles';
import { Form } from './styles';
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';
import Logo from '../../assets/logo.svg';
import { FoodCard } from '../../Components/FoodCard';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { CardItem } from '../../Components/CardItem';

export function SignOut() {
  return (
    <Container>
      <Header />
      <Footer />
      <FoodCard />
      <CardItem />
      {/* <div> */}
      {/* <img src={Logo} alt="icone de logo em forma hexagonal" />
        <h1>food explorer</h1>
      </div>
      {
        <Form>
          <h1>Crie sua conta</h1>
          <label htmlFor="Name"></label>
          <label htmlFor="Name">Seu nome</label>
          <Input type="name" id="Name" placeholder="Exemplo: Maria da Silva" />

          <label htmlFor="Email">Email</label>
          <Input
            type="email"
            id="Email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />
          <label htmlFor="Senha">Senha</label>
          <Input type="senha" id="Senha" placeholder="No mínimo 6 caracteres" />
          <Button className="btn" title="Criar conta" />
          <a href="#">Já tenho uma conta</a>
        </Form>
      } */}
    </Container>
  );
}
