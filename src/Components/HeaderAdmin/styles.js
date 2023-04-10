import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 7.68rem;
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  background: #00111a;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  > .logo {
    display: flex;
    align-items: center;
    background: none;
    gap: 0.9375rem;

    h1 {
      font-size: 1.5625rem;
      width: max-content;
    }
    p {
      color: ${({ theme }) => theme.COLORS.BLUE_50};
    }
    > .text {
      background: none;
      display: flex;
      flex-direction: column;
      align-items: end;
      margin-top: 0.9375rem;
    }
  }

  div {
    background: #0d1d25;
    border: none;
  }

  > .logOff {
    background: transparent;
    border: none;
    padding-top: 2.25rem;
    padding-bottom: 2.25rem;
    display: flex;
    align-items: center;
    width: 2rem;
    height: 2rem;

    svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Button = styled.button`
  height: 3rem;
  background-color: ${({ theme }) => theme.COLORS.RED_300};
  border-radius: 0.3125rem;
  padding: 0.75rem 4.25rem;
  white-space: nowrap;
  font-size: 0.875rem;
  margin-bottom: 9px;
  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Poppins';
`;
