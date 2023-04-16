import { Container, Carousel } from './styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRef } from 'react';

export function Section({ title, children }) {
  const carousel = useRef(null);

  function handleLeftClick(e) {
    e.preventDefault();

    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  function handleRightClick(e) {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
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
}
