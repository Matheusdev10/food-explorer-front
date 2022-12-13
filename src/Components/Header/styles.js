import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 123px;
  width: 100%;
  height: 104px;
  display: flex;
  align-items: center;
  gap: 32px;
  background: #00111a;

  div {
    background: #0d1d25;
    border: none;
  }

  > .logo {
    display: flex;
    align-items: center;
    gap: 15px;
    background: #00111a;

    h1 {
      font-size: 25px;
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
    width: 216px;
    white-space: nowrap;
  }

  > .buttonText {
    width: 139px;
    height: 26px;
    background: transparent;
    border: none;
    font-weight: 400;
    font-size: 16px;
    color: #c4c4cc;
  }

  > .logOff {
    background: transparent;
    border: none;
    padding-top: 36px;
    padding-bottom: 36px;
    display: flex;
    align-items: center;
    width: 32px;
    height: 32px;

    svg {
      font-size: 32px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 130px;

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

export const Button = styled.button`
  width: 216px;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.RED_300};
  border-radius: 5px;
  padding: 0 20px;
  font-size: 14px;
  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Poppins';
  display: flex;
  align-items: center;
  gap: 8px;
`;
