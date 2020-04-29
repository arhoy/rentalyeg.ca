import React, { useState } from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { FaPlus } from 'react-icons/fa';
import {
  StyledImage2,
  ImageContainerSlider2,
  ImageSlider,
  CustomH4,
  CustomH2,
} from './HomeStyling';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';

// This only needs to be imported once in your app
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';

import { Container800 } from '../reusableStyles/sections/Sections';

const Container = styled.div`
  padding: 4rem 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PropertyGallery = ({ property }) => {
  const [modal, setModal] = useState(false);
  const [imageNumber, setImageNumber] = useState(0);
  const handleImageClick = i => {
    setModal(prev => !prev);
    setImageNumber(i);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    fadeIn: false,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,

          rows: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {modal && (
        <Lightbox
          mainSrc={property.section3gallery[imageNumber].fluid.src}
          onCloseRequest={e => handleImageClick(0)}
        >
          Due
        </Lightbox>
      )}

      <Container800>
        <TitleContainer>
          <CustomH4 className="center">
            {property.section3gallerySubtitle}
          </CustomH4>
          <CustomH2>{property.section3galleryTitle}</CustomH2>
        </TitleContainer>
      </Container800>
      <Container>
        <ImageContainerSlider2>
          <Slider {...settings}>
            {property.section3gallery.map((image, i) => (
              <ImageSlider modal onClick={e => handleImageClick(i)} key={i}>
                <StyledImage2 fluid={image.fluid} />
                <span className="zoom">
                  <FaPlus />
                </span>
              </ImageSlider>
            ))}
          </Slider>
        </ImageContainerSlider2>
      </Container>
    </>
  );
};

export default PropertyGallery;
