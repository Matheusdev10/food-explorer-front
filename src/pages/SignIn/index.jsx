import { Container } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from './styles';
import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';
import Logo from '../../assets/logo.svg';
import { useState } from 'react';

import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, loading } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleSignIn();
    }
  }

  return (
    <Container>
      <div className="logo">
        <img src={Logo} alt="icone de logo em forma hexagonal" />
        <h1>food explorer</h1>
      </div>

      <Form>
        <h1>Faça login</h1>
        <label htmlFor="Email"></label>
        <label htmlFor="Email">Email</label>
        <Input
          type="email"
          onKeyPress={handleKeyPress}
          id="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="Password">Senha</label>
        <Input
          onKeyPress={handleKeyPress}
          type="password"
          id="Password"
          placeholder="No mínimo 6 caracteres"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={handleSignIn}
          className="btn"
          disabled={loading}
          title={loading ? 'Carregando' : 'Entrar'}
        />
        <Link to="/register">Crie uma conta</Link>
      </Form>
    </Container>
  );
}
