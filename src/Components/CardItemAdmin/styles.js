import styled from 'styled-components';

export const Box = styled.div`
  width: 19rem;
  border-radius: 0.5rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  /* > button {
    border: none;
    background: none;
    margin-left: 170px;
  } */

  > img {
    padding: 0 14.375rem;
    margin: auto;
  }

  > .content {
    margin: auto;
  }

  > div img {
    width: 11rem;
    height: 11rem;
    margin-bottom: 0.9375rem;
  }

  > h4 {
    font-size: 1.5rem;
    margin-top: 0.9375rem;
    display: flex;
    align-items: center;
    margin: auto;
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
    padding-bottom: 3.125rem;
  }
`;
