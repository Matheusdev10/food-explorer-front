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
  z-index: 2;
  @media only screen and (max-width: 768px) {
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  div {
    background: #0d1d25;
    border: none;
  }

  > .logo {
    display: flex;
    align-items: center;
    gap: 0.9375rem;
    background: #00111a;
    @media only screen and (max-width: 768px) {
      width: 100%;
      justify-content: space-around;

      > .iconCloseAndMenu {
        opacity: 1;
        display: flex;
        background-color: transparent;
        > .modalMobile {
          opacity: 1;
          li {
            list-style: none;
          }
          position: fixed;
          width: 100%;
          height: 100%;
          width: 140px;
          height: 140px;
          margin-top: 30px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding-left: 10px;
          font-size: 20px;
          .back {
            display: flex;
            gap: 10px;
            background-color: transparent;
            align-items: center;
          }
          .exit {
            display: flex;
            gap: 10px;
            background-color: transparent;
            align-items: center;
          }
        }
      }
    }
    .iconLogoText {
      background-color: transparent;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .logo {
      display: flex;
      align-items: center;
      background-color: transparent;
      width: 100%;
    }

    h1 {
      font-size: 1.5625rem;
      width: max-content;
    }
  }

  .input {
    width: 100%;
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  .iconPedido {
    opacity: 0;
    @media only screen and (max-width: 768px) {
      opacity: 1;
      background-color: transparent;
    }
  }

  .modalMobile {
    opacity: 0;
  }

  .iconCloseAndMenu {
    opacity: 0;
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
    @media only screen and (max-width: 768px) {
      display: none;
    }

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
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
