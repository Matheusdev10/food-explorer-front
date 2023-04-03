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

  .col-1 {
    width: 20%;
  }

  .col-2 {
    width: 50%;
  }

  .col-3 {
    width: 30%;
  }

  .input {
    margin-top: 1rem;
  }
`;
