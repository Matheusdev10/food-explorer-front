import styled from 'styled-components';

export const Container = styled.div`
  padding: 7.5rem;

  > .back {
    display: flex;
    align-items: center;
    cursor: pointer;

    p {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  h1 {
    margin-top: 1.5rem;
  }
`;

export const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  gap: 32px;
  flex-wrap: wrap;

  .input {
    margin-top: 1rem;
  }

  input[type='file'] {
    display: none;
  }

  .col-1 {
    width: 20%;

    > p {
      margin-top: 4px;
    }

    label {
      height: 3rem;
      width: 100%;
      padding: 0.75rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      border-radius: 0.5rem;
      text-align: center;
      display: block;
      margin-top: 0.84375rem;
      cursor: pointer;
    }

    svg {
      position: relative;
      bottom: 50px;
      margin-left: 30px;
    }
  }

  .col-2 {
    width: 40%;
  }

  .col-3 {
    width: 30%;
  }

  .col-4 div:nth-child(1) {
  }

  .wrapper div:nth-child(3) {
    background: blue;
  }
`;
