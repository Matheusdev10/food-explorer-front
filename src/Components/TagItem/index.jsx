import { Container } from './styles';

export function TagItem({ title, ...rest }) {
  return <Container {...rest}>{title}</Container>;
}
