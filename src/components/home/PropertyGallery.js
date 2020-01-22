import React, { useState } from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import {
  StyledImage2,
  ImageContainerSlider2,
  ImageSlider,
} from './HomeStyling';
import Slider from 'react-slick';
import SliderContainer2 from '../reusableStyles/slider/SliderContainer2';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { H2 } from '../reusableStyles/typography/Typography';
import { Container800 } from '../reusableStyles/sections/Sections';

const Container = styled.div`
  padding: 4rem 0;
`;

const PropertyGallery = () => {
  const handleImageClick = () => {
    console.log('Clicked');
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
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
  const myImages = useStaticQuery(graphql`
    query {
      heroCarousel: allFile(
        filter: { relativePath: { regex: "/bluequill/" } }
      ) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  `);
  return (
    <>
      <Container800>
        <H2>Property Gallery</H2>
      </Container800>
      <Container>
        <ImageContainerSlider2>
          <Slider {...settings}>
            {myImages.heroCarousel.nodes.map((image, i) => (
              <ImageSlider onClick={handleImageClick} key={i}>
                {}
                <StyledImage2 fluid={image.childImageSharp.fluid} />
              </ImageSlider>
            ))}
          </Slider>
        </ImageContainerSlider2>
      </Container>
    </>
  );
};

export default PropertyGallery;
