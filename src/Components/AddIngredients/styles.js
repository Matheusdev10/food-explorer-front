import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.GRAY_500};
  color: ${({ theme }) => theme.COLORS.PINK};
  border: ${({ theme, isNew }) =>
    isNew ? `0.0625rem dashed ${theme.COLORS.GRAY_400}` : 'none'};
  margin-bottom: 0.5rem;
  border-radius: 0.625rem;
  padding-right: 1rem;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  > input {
    height: 2rem;
    max-width: 6.25rem;
    width: auto;
    padding: 0.75rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }
`;
