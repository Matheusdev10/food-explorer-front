import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;

  > input {
    height: 3rem;
    width: 100%;
    padding: 0.75rem;
    /* border: 1px solid #ffffff; */
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: none;
  }

  > svg {
    margin-left: 16px;
  }
`;

// color: ${({ theme, isActive }) =>
// isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
