import { FC } from 'react';
import { Container } from './styles';

interface IButton {
  title: string;
  icon?: string;
  loading?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button: FC<IButton> = ({
  title,
  icon,
  loading,
  disabled,
  ...rest
}) => {
  return (
    <Container type="button" disabled={disabled} {...rest}>
      {title}
    </Container>
  );
};
