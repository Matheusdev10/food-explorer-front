import { Container } from './styles';
import { Form } from './styles';
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';
import Logo from '../../assets/logo.svg';

export function SignIn() {
  return (
    <Container>
      <div>
        <img src={Logo} alt="icone de logo em forma hexagonal" />
        <h1>food explorer</h1>
      </div>

      <Form>
        <h1>Faça login</h1>
        <label htmlFor="Email"></label>
        <label htmlFor="Email">Email</label>
        <Input
          type="email"
          id="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="Password">Senha</label>
        <Input
          type="password"
          id="Password"
          placeholder="No mínimo 6 caracteres"
        />
        <Button className="btn" title="Entrar" />
        <a href="#">Crie uma conta</a>
      </Form>
    </Container>
  );
}
