import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  > div {
    display: flex;
    align-items: center;
    gap: 1.18rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Roboto';
    font-weight: 700;
  }

  @media (max-width: 860px) {
    display: block;
    width: 100%;
    margin: 0 auto;
    > div {
      display: none;
    }
  }
`;

export const Form = styled.form`
  width: 29.75rem;
  margin-top: 6rem;
  padding: 4rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > h1 {
    margin-bottom: 1.93rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Poppins';
    font-weight: 500;
  }

  > label {
    font-weight: 400;
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > .btn {
    margin-top: 1.125rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Poppins';
  }

  > a {
    text-align: center;
    margin-top: 2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Poppins';
  }

  @media (max-width: 500px) {
    margin-top: 0;
    width: 100%;
    height: 100vh;
  }
`;
