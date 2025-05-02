import { FiPlus, FiX } from 'react-icons/fi';

import { FC } from 'react';
import { Container } from './styles';

interface IAddIngredients {
  isNew?: boolean;
  value: string;
  onClick: () => void;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddIngredients: FC<IAddIngredients> = ({
  isNew,
  value,
  onClick,
  ...rest
}) => {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
};
