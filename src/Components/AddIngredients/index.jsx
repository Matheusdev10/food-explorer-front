import { FiPlus, FiX } from 'react-icons/fi';

import { Container } from './styles';

export function AddIngredients({ isNew, value, onClick, register, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input
        {...register(rest.name)}
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
