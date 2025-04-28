import styled from 'styled-components';

export const Container = styled.span`
  font-size: 0.875rem;
  font-weight: bold;
  padding: 0.3125rem 0.875rem;
  border-radius: 0.3125rem;
  margin-right: 0.375rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
`;
