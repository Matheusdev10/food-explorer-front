import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  > h2 {
    font-size: 2rem;
    margin-top: 3.9375rem;
    margin-bottom: 1.4375rem;
  }
  @media only screen and (max-width: 1024px) {
    width: 100%;
    padding: 5%;
  }
`;
export const Carousel = styled.div`
  position: relative;

  > div {
    display: flex;
    gap: 2.7rem;
    overflow-x: auto;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .btn-left,
  .btn-right {
    position: absolute;

    height: 37.5rem;
    padding-inline: 1rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  .btn-left {
    top: 0;
    left: 0;
    border: none;
    background: linear-gradient(
      270deg,
      rgba(0, 10, 15, 0.272541) 0%,
      #000a0f 100%
    );
  }
  .btn-right {
    top: 0;
    right: 0;
    justify-content: flex-end;
    border: none;
    background: linear-gradient(
      90deg,
      rgba(0, 10, 15, 0.272541) 0%,
      #000a0f 100%
    );
  }

  @media (min-width: 768px) {
    .btn-left,
    .btn-right {
      display: flex;
      align-items: center;
      transition: all ease 0.5s;
      opacity: 0;
    }
    &:hover {
      .btn-left,
      .btn-right {
        opacity: 1;
        z-index: 0;
      }
    }
  }
`;
