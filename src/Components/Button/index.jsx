import { Container } from './styles';

export function Button({ title, Icon: icon, loading = false, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {loading ? 'Carregando...' : title}
    </Container>
  );
}
