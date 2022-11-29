import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.RED_200};
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  height: 3rem;
  border-radius: 0.3125rem;
  border: 0;
  padding: 0 1rem;
  margin-top: 1rem;
  font-weight: 500;
  &:disabled {
    opacity: 0.5;
  }
`;
