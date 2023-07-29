import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  @media (max-width: 768px) {
    display: flex;
    padding: 0;
    flex-direction: column;
    gap: 0;
  }

  > .dishe {
    font-size: 1.5rem;
    font-weight: bold;

    > .back {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    > .imageDishe {
      img {
        height: 24.375rem;
        width: 24.375rem;
        margin-top: 2.62rem;
      }
    }

    @media (max-width: 768px) {
      > .back {
        display: flex;
        margin-top: 120px;
      }
    }
    > .imageDishe {
      img {
        width: 300px;
        height: 300px;
      }
    }
  }
`;

export const Box = styled.div`
  margin-top: 3rem;
  > section {
    > h2 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }
    > p {
      font-size: 1.5rem;
      margin-bottom: 1.75rem;
    }
  }

  .btn {
    margin-top: 3rem;
  }

  @media (max-width: 768px) {
    > section {
      text-align: center;

      h2 {
        width: max-content;
        font-size: 30px;
        text-align: center;
        width: 100%;
      }

      > p {
        font-size: 20px;
        text-align: center;
      }
    }

    .btn {
      display: flex;
      margin-top: -48px;
      padding: 5rem;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
    }
  }
`;
