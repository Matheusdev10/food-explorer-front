import { FiPlus, FiX } from 'react-icons/fi';

import { Container } from './styles';
import { FC } from 'react';
import React from 'react';

interface IAddIngredients {
  isNew: boolean;
  value: string;
  onClick: () => void;
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
