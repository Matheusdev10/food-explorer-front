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

  div {
    background: #0d1d25;
    border: none;
  }

  > .logo {
    display: flex;
    align-items: center;
    gap: 0.9375rem;
    background: #00111a;

    h1 {
      font-size: 1.5625rem;
      width: max-content;
    }
  }

  > .favoriteButton {
    padding: 0 2.125rem;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.GRAY_50};
    font-family: 'Roboto';
  }

  > button {
    width: 13.5rem;
    white-space: nowrap;
  }

  > .buttonText {
    width: 13.5rem;
    height: 1.625rem;
    background: transparent;
    border: none;
    font-weight: 400;
    font-size: 1rem;
    color: #c4c4cc;
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
  width: 13.5rem;
  height: 3.5rem;
  background-color: ${({ theme }) => theme.COLORS.RED_300};
  border-radius: 0.3125rem;
  padding: 0 1.25rem;
  font-size: 0.875rem;
  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Poppins';
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8.125rem;

    button {
      display: none;
    }

    .logout {
      display: none;
    }

    > .logo {
      display: none;
    }
  }
`;
