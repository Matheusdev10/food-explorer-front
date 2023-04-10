import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height: 172px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  resize: none;

  border-radius: 10px;
  padding: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`;