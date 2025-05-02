import { FC, ReactNode, useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Carousel, Container } from './styles';

interface ISection {
  title: string;
  children: ReactNode;
}

export const Section: FC<ISection> = ({ title, children }) => {
  const carousel = useRef<HTMLDivElement>(null);

  function handleLeftClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  }
  function handleRightClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  }
  return (
    <Container>
      <h2>{title}</h2>
      <Carousel>
        <div ref={carousel}>{children}</div>
        <button className="btn-left" onClick={handleLeftClick}>
          <FiChevronLeft size={50} />
        </button>
        <button className="btn-right" onClick={handleRightClick}>
          <FiChevronRight size={50} />
        </button>
      </Carousel>
    </Container>
  );
};
