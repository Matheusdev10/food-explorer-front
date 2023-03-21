import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;

  > .dishe {
    font-size: 24px;
    font-weight: bold;

    > .back {
      display: flex;
      align-items: center;
    }

    > img {
      height: 389px;
      width: 390px;
      margin-top: 42px;
    }
  }
`;

export const Box = styled.div`
  > section {
    > h2 {
      font-size: 40px;
      margin-bottom: 24px;
    }
    > p {
      font-size: 24px;
      margin-bottom: 28px;
    }
    > div:last-child {
      display: flex;
      align-items: center;
      padding: 12px;
      gap: 1rem;
      margin-top: 60px;

      span {
        font-size: 2rem;
        font-weight: 700;
      }

      .btn {
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.WHITE};
        display: flex;
      }
    }
  }
`;
