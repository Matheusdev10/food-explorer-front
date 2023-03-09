import styled from 'styled-components';

export const Box = styled.div`
  width: 19rem;
  border-radius: 0.5rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;

  > img {
    padding-left: 15.625rem;
  }

  > div img {
    width: 11rem;
    height: 11rem;
  }

  > h4 {
    font-size: 1.5rem;
    margin-top: 0.9375rem;
    display: flex;
    align-items: center;
  }
  > p {
    font-size: 0.875rem;
    margin-top: 0.9375rem;
    margin-bottom: 0.9375rem;
  }
  > span {
    font-size: 2rem;

    color: ${({ theme }) => theme.COLORS.BLUE_50};
  }

  > div:last-child {
    display: flex;
    align-items: center;

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
      align-items: center;
    }
  }
`;
