import { Container } from './styles';

export function Button({ title, Icon: icon, Loading: loading, ...rest }) {
  return (
    <Container type="button" disabled={false} {...rest}>
      {title}
    </Container>
  );
}
