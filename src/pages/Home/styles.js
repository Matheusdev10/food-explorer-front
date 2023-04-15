import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  overflow-x: hidden;
  gap: 1.6875rem;
  padding-bottom: 7.5rem;
`;

export const Box = styled.div`
  width: 70rem;
  height: 16.25rem;
  margin-top: 16.56rem;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border-radius: 0.5rem;

  > div img {
    position: absolute;
    top: 1.25rem;
    margin-top: 6.25rem;
    left: 3.9375rem;
  }
  > div {
    width: 26.375rem;
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
`;
