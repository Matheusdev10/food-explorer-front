import styled from 'styled-components';

export const Container = styled.div`
  padding: 7.5rem;
  width: 100%;
  @media (max-width: 1153px) {
    padding: 2rem;

    p {
      width: max-content;
    }
    > .box {
      margin-top: 100px;
      > .back {
        display: flex;
        align-items: center;
        cursor: pointer;

        p {
          font-size: 1.5rem;
          font-weight: bold;
        }
      }
    }
  }
  > .box {
    > .back {
      display: flex;
      align-items: center;
      cursor: pointer;

      p {
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
  }

  h1 {
    margin-top: 1.5rem;
  }
`;

export const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  @media (max-width: 1153px) {
    display: flex;
    flex-direction: column;
  }

  .input {
    margin-top: 1rem;

    > input {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
      border: none;
      height: 3rem;
      width: 100%;
      padding: 0.75rem;
      border-radius: 0.5rem;
    }
  }

  input[type='file'] {
    display: none;
  }

  .col-1 {
    width: 20%;

    > p {
      margin-top: 0.1875rem;
    }

    label {
      height: 3rem;
      width: 100%;
      padding: 0.9375rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      border-radius: 0.5rem;
      text-align: center;
      display: block;
      margin-top: 0.84375rem;
      cursor: pointer;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    }

    svg {
      position: relative;
      bottom: 3rem;
      margin-left: 1.875rem;
    }
  }

  .col-2 {
    width: 40%;
  }

  .col-3 {
    width: 33%;
    display: flex;

    flex-direction: column;

    > label {
      margin-bottom: -1px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 100%;

      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    > select {
      border: none;
      display: flex;
      margin-top: 20px;
      justify-content: space-between;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
      border-color: ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 5px;
      padding: 15px 10px;
      margin-bottom: 37px;
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    > span {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  .caret {
    width: 0;
    height: 0;
    border-left: 0.3125rem solid transparent;
    border-right: 0.3125rem solid transparent;
    border-top: 0.375rem solid #fff;
  }

  .menu {
    list-style: none;
    padding: 0.2em 0.5em;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border-radius: 0.5em;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    position: absolute;
    top: 3em;
    left: 50%;
    width: 100%;
    opacity: 0;
    display: none;
    z-index: 1;
  }

  .menu li {
    padding: 0.7em 0.5em;
    margin: 0.3em 0;
    border-radius: 0.5em;

    cursor: pointer;
  }

  .col-4 {
    width: 70%;
  }

  .tags {
    max-height: 100%;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    display: flex;
    align-items: center;
    justify-content: start;
    padding-top: 0.5rem;
    padding-left: 10px;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: 1rem;
  }

  .col-5 {
    width: 26%;
  }

  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .col-6 {
    width: 100%;
    margin-top: 2rem;
  }

  .btn {
    width: 100%;
    display: flex;
    justify-content: end;

    button {
      background: ${({ theme }) => theme.COLORS.PINK_50};
      height: 3rem;
      border-radius: 0.3125rem;
      border: 0;
      padding: 0.5rem 1.5rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-weight: 500;
      &:disabled {
        opacity: 0.5;
      }
    }
  }

  @media (max-width: 1153px) {
    .col-1,
    .col-2,
    .col-3,
    .col-4,
    .col-5,
    .col-6 {
      width: 100%;
      margin-top: 0;
    }
    .col-1 {
      label {
        text-align: center;
      }
    }
    .tags {
      height: 100%;
      padding-top: 0.5rem;
    }
    .col-2 {
      margin-top: -50px;
    }

    .col-4 {
      margin-top: -50px;
    }
    .btn {
      margin-bottom: 60px;
    }
  }
`;
