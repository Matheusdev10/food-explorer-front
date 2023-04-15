import styled from 'styled-components';

export const Container = styled.section`
  > h2 {
    font-size: 2rem;
    margin-top: 3.9375rem;
    margin-bottom: 1.4375rem;
  }
`;
export const Slider = styled.div`
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
    z-index: 5;
    height: 51.2rem;
    width: 11.6rem;
    padding-inline: 1rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: none;
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
`;
