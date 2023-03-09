import styled from 'styled-components';

export const Container = styled.div`
  width: 70rem;
  height: 260px;
  margin-top: 265px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border-radius: 8px;

  > div img {
    position: absolute;
    top: 18px;
    margin-top: 100px;
  }
  > div {
    margin-right: 50px;
    height: 56px;
    width: 422px;
  }
  > div h1 {
    margin-bottom: 8px;
  }
  > div p {
    color: ${({ theme }) => theme.COLORS.GRAY_50};
  }
`;
