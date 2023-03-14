import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-x: hidden;
`;

export const Box = styled.div`
  width: 70rem;
  height: 260px;
  margin-top: 265px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border-radius: 8px;

  > div img {
    position: absolute;
    top: 20px;
    margin-top: 100px;
    left: 63px;
  }
  > div {
    width: 422px;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  > div h1 {
    margin-bottom: 8px;
    font-size: 40px;
    letter-spacing: 2.4px;
  }
  > div p {
    color: ${({ theme }) => theme.COLORS.GRAY_50};
    font-size: 16px;
  }
`;
