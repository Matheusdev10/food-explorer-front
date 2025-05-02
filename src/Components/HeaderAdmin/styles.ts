import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 7.68rem;
  width: 100%;
  margin-inline: auto;
  height: 6.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  background: #00111a;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0;
  }

  > .logo {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: transparent;
    justify-content: center;
    gap: 0.9375rem;

    > .box {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      background-color: transparent;
      > .imgLogo {
        background-color: transparent;
      }

      > .text {
        background: none;
        display: flex;
        flex-direction: column;
        align-items: end;
        margin-top: 0.9375rem;
        @media only screen and (max-width: 768px) {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
          margin-top: -3px;
        }
      }
    }

    .modalMobile {
      opacity: 0;
    }

    .iconCloseAndMenu {
      opacity: 0;
    }

    @media only screen and (max-width: 768px) {
      > .iconCloseAndMenu {
        opacity: 1;
        background-color: transparent;
        > .modalMobile {
          opacity: 1;
          li {
            list-style: none;
          }

          position: fixed;
          width: 100%;
          height: 100%;
          width: 170px;
          height: 170px;
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
          .newDishe {
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
      display: flex;
      justify-content: space-evenly;
    }

    h1 {
      font-size: 1.5625rem;
      width: max-content;
      @media only screen and (max-width: 768px) {
        font-size: 20px;
      }
    }
    p {
      color: ${({ theme }) => theme.COLORS.BLUE_50};
      @media only screen and (max-width: 768px) {
        font-size: 10px;
        width: max-content;
      }
    }
  }
  > .input {
    width: 200%;
  }
  @media only screen and (max-width: 768px) {
    > .input {
      display: none;
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
  height: 3rem;
  background-color: ${({ theme }) => theme.COLORS.RED_300};
  border-radius: 0.3125rem;
  padding: 0.75rem 4.25rem;
  white-space: nowrap;
  font-size: 0.875rem;
  margin-bottom: 0.5625rem;
  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Poppins';
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
