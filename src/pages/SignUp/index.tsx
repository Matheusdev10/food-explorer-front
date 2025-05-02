import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../Components/Button';
import { Input } from '../../Components/Input';
import Logo from '../../assets/logo.svg';
import { createUser } from '../../store/apis/auth';
import { Container, Form } from './styles';

export const SignUp = () => {
  const [name, setName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos');
    }
    setLoading(true);
    await createUser({ name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso');
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
          setLoading(false);
        } else {
          alert('Não foi possível cadastrar');
          setLoading(false);
        }
      });
  };
  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleSignUp();
    }
  }

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
          onKeyPress={handleKeyPress}
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
          onKeyPress={handleKeyPress}
          id="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />
        <label htmlFor="Senha">Senha</label>
        <Input
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          type="password"
          onKeyPress={handleKeyPress}
          value={password}
          id="Senha"
          placeholder="No mínimo 6 caracteres"
        />
        <Button
          onClick={handleSignUp}
          className="btn"
          disabled={loading}
          title={loading ? 'Carregando' : 'Cadastrar'}
        />
        <Link to={'/'}>Já tenho uma conta</Link>
      </Form>
    </Container>
  );
};
