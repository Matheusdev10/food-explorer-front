import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.GRAY_500};
  color: ${({ theme }) => theme.COLORS.PINK};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_400}` : 'none'};
  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

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
    height: 32px;
    max-width: 100px;
    width: auto;
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }
`;
