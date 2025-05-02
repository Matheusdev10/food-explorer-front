import { FC, InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons'; // ou o tipo específico do seu set de ícones
import { Container } from './styles';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  icon?: IconType;
}

export const Input: FC<IInput> = ({ icon: Icon, ...rest }) => {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  );
};
