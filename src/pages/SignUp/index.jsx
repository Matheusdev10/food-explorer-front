import { Container } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from './styles';
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';
import Logo from '../../assets/logo.svg';
import { useState } from 'react';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <img src={Logo} alt="icone de logo em forma hexagonal" />
        <h1>food explorer</h1>
      </div>
      <Form>
        <h1>Crie sua conta</h1>
        <label htmlFor="Name"></label>
        <label htmlFor="Name">Seu nome</label>
        <Input
          onChange={(event) => {
            setName(event.target.value);
          }}
          type="name"
          value={name}
          id="Name"
          placeholder="Exemplo: Maria da Silva"
        />

        <label htmlFor="Email">Email</label>
        <Input
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          type="email"
          value={email}
          id="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />
        <label htmlFor="Senha">Senha</label>
        <Input
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          type="password"
          value={password}
          id="Senha"
          placeholder="No mínimo 6 caracteres"
        />
        <Button
          onClick={() => {
            console.log(name, email, password);

            navigate('/');
          }}
          className="btn"
          title="Criar conta"
        />
        <Link to={'/'}>Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}
