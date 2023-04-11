import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  > .dishe {
    font-size: 1.5rem;
    font-weight: bold;

    > .back {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    > img {
      height: 24.375rem;
      width: 24.375rem;
      margin-top: 2.62rem;
    }
  }
`;

export const Box = styled.div`
  margin-top: 5rem;
  > section {
    > h2 {
      font-size: 2.5rem;
    }
    > p {
      font-size: 1.5rem;
      margin-bottom: 1.75rem;
    }
  }

  .btn {
    margin-top: 3rem;
  }
`;
