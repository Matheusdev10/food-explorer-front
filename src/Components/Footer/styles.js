import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 7.68rem;
  width: 100%;
  height: 4.8125rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background: #00111a;
  position: fixed;
  bottom: 0;
  z-index: 1;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;

    width: 100%;
  }

  > .logo {
    display: flex;
    align-items: center;
    gap: 0.9375rem;
    background: #00111a;

    h1 {
      font-size: 1.56rem;
      width: max-content;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  > .rights {
    display: flex;
    align-items: center;
    background: transparent;
    gap: 0.3rem;

    > p {
      font-family: 'DM Sans', sans-serif;
      font-size: 0.875rem;
    }
  }
  @media (max-width: 768px) {
    > .logo {
      h1 {
        font-size: 15px;
      }
    }

    .rights {
      p {
        background-color: blue;
        font-size: 8px;
        width: max-content;
      }
    }
  }
`;
