import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Components/Button';
import { Input } from '../../Components/Input';
import Logo from '../../assets/logo.svg';
import { Container, Form } from './styles';

import { useAuth } from '../../hooks/auth';

export const SignIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { signIn, loading } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSignIn();
    }
  };

  return (
    <Container>
      <div className="logo">
        <img src={Logo} alt="icone de logo em forma hexagonal" />
        <h1>food explorer</h1>
      </div>

      <Form>
        <h1>Faça login</h1>
        <label htmlFor="Email">Email</label>
        <Input
          type="email"
          onKeyDown={handleKeyPress}
          id="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="Password">Senha</label>
        <Input
          onKeyDown={handleKeyPress}
          type="password"
          id="Password"
          placeholder="No mínimo 6 caracteres"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          className="btn"
          onClick={handleSignIn}
          disabled={loading}
          title={loading ? 'Carregando' : 'Entrar'}
        />

        <Link to="/register">Crie uma conta</Link>
      </Form>
    </Container>
  );
};
