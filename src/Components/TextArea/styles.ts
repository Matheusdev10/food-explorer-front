import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height: 10.75rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  resize: none;

  border-radius: 0.625rem;
  padding: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`;
