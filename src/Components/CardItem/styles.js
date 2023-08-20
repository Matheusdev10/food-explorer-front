import styled from 'styled-components';
export const Container = styled.div`
  margin: auto;
`;

export const Box = styled.div`
  width: 19rem;
  border-radius: 0.5rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  @media (max-width: 768px) {
    width: auto;
    height: 100%;
    margin: auto;
    overflow-x: hidden;
  }

  > .content {
    margin: auto;
  }

  > div img {
    width: 11rem;
    height: 11rem;
    margin-bottom: 0.9375rem;
  }

  > .productName {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 19px;
  }

  > p {
    margin-top: 0.9375rem;
    margin-bottom: 0.9375rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    line-height: 1.25rem;
  }
  > span {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.BLUE_50};
    margin: auto;
    margin-top: 0.9375rem;
  }

  @media (max-width: 768px) {
    img:first-child {
      position: relative;
      size: 10px;
    }
    .content {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    div img {
      width: 150px;
      height: 150px;
    }

    > span {
      font-size: 25px;
    }
  }

  .addItems {
    margin-top: 1.4375rem;
  }

  > div:last-child {
    display: flex;
    align-items: center;
    padding: 0.75rem;
    gap: 1rem;

    span {
      font-size: 2rem;
      font-weight: 700;
    }

    .btn {
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.WHITE};
      display: flex;
      z-index: 1;
    }
  }
  .btnInclude {
    z-index: 1;
  }
`;
