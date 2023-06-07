import { Container } from './styles';

export function TextArea({ value, register, ...rest }) {
  return (
    <Container {...register(rest.name)} {...rest}>
      {value}
    </Container>
  );
}
