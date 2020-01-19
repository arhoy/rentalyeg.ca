// NO LINKS
import React from 'react';
import styled from '@emotion/styled';

const ImageContainer = styled.div`
  margin: 0 1rem;
  & span {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const SliderContainer2 = ({ children }) => {
  return <ImageContainer>{children}</ImageContainer>;
};

export default SliderContainer2;
