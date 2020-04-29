// This is the React Responsive Gallery
// http://react-responsive-carousel.js.org/#demos
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import styled from '@emotion/styled';

const StyledCarousel = styled(Carousel)`
  & .carousel .thumbs-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
  }
`;

const RRC = ({ images }) => {
  return (
    <StyledCarousel>
      {images &&
        images.map((image, i) => (
          <img key={i} src={image.fluid.src} alt={' '} />
        ))}
    </StyledCarousel>
  );
};

export default RRC;
