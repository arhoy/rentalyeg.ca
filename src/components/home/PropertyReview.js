import React from 'react';
import styled from '@emotion/styled';

import { ImageContainerSlider2, CustomH2, CustomH4 } from './HomeStyling';
import Slider from 'react-slick';
import { PropertyCard } from '../reusableStyles/cards/PropertyCard';

const Card = styled.div`
  outline: none;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CustomSlider = styled(Slider)``;

const PropertyReview = ({ property }) => {
  const reviews = property.section4reviewsOnCommunity;
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 5000,
    fadeIn: false,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <TitleContainer>
        <CustomH4>{property.section4reviewSubtitle}</CustomH4>
        <CustomH2 className="centered">
          {property.section4reviewsTitle}
        </CustomH2>
      </TitleContainer>

      <ImageContainerSlider2>
        <CustomSlider {...settings}>
          {reviews &&
            reviews.map((review, i) => (
              <Card key={i}>
                <PropertyCard
                  blurb={
                    review.childContentfulCommunityReviewsDescriptionTextNode
                      .description
                  }
                  img={review.reviewImage.fluid.src}
                  user={review.reviewerName}
                  position={review.reviewerPosition}
                />
              </Card>
            ))}
        </CustomSlider>
      </ImageContainerSlider2>
    </>
  );
};

export default PropertyReview;
