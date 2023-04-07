import styled from 'styled-components';

export const Container = styled.div`
  padding: 7.5rem;

  > .back {
    display: flex;
    align-items: center;
    cursor: pointer;

    p {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  h1 {
    margin-top: 1.5rem;
  }
`;

export const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  gap: 32px;
  flex-wrap: wrap;

  .input {
    margin-top: 1rem;
  }

  input[type='file'] {
    display: none;
  }

  .col-1 {
    width: 20%;

    > p {
      margin-top: 3px;
    }

    label {
      height: 3rem;
      width: 100%;
      /* padding: 0.75rem; */
      padding: 15px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      border-radius: 0.5rem;
      text-align: center;
      display: block;
      margin-top: 0.84375rem;
      cursor: pointer;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    }

    svg {
      position: relative;
      bottom: 48px;
      margin-left: 30px;
    }
  }

  .col-2 {
    width: 40%;
  }

  .col-3 {
    width: 30%;
    position: relative;
    margin-left: 1px;

    p {
      margin-bottom: 15px;
    }
  }

  .select {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    display: flex;
    border-radius: 0.5rem;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    height: 3rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    cursor: pointer;

    > span {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  .caret {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #fff;
  }

  .menu {
    list-style: none;
    padding: 0.2em 0.5em;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    /* border: 1px #363a42 solid; */
    /* box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.2); */
    border-radius: 0.5em;
    /* color: #9fa5b5; */
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    position: absolute;
    top: 3em;
    left: 50%;
    width: 100%;
    opacity: 0;
    display: none;
    z-index: 1;
  }

  .menu li {
    padding: 0.7em 0.5em;
    margin: 0.3em 0;
    border-radius: 0.5em;

    cursor: pointer;
  }

  .col-4 {
    width: 100%;
  }

  .tags {
    width: 75%;
    height: 48px;
    border-radius: 8px;
    padding: 8px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
`;
