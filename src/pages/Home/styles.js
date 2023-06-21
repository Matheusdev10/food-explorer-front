import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  margin: auto;
  justify-content: center;
  overflow-x: hidden;
  gap: 1.6875rem;
  padding-bottom: 7.5rem;
`;

export const Box = styled.div`
  width: 100%;
  height: 16.25rem;
  margin-top: 16.56rem;
  display: flex;
  position: relative;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border-radius: 0.5rem;

  > div img {
    position: absolute;
    margin-bottom: 9rem;
  }
  > div {
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  > div h1 {
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
    letter-spacing: 0.15rem;
  }
  > div p {
    color: ${({ theme }) => theme.COLORS.GRAY_50};
    font-size: 1.0625rem;
  }
  @media only screen and (max-width: 1024px) {
    width: 90%;
    > div img {
      margin-left: 5%;
    }

    > div h1 {
      font-size: 40px;
    }

    > div p {
      font-size: 15px;
    }
  }
`;
