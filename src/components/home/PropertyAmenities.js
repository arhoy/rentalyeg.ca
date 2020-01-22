import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

import {
  FaWarehouse,
  FaKey,
  FaSnowflake,
  FaWheelchair,
  FaLeaf,
  FaSmoking,
  FaCat,
  FaLandmark,
} from 'react-icons/fa';
import { H2Centered } from '../reusableStyles/typography/Typography';
import { Container1200 } from '../reusableStyles/sections/Sections';

const pulse = keyframes`
from {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
}

50% {
  -webkit-transform: scale3d(1.05, 1.05, 1.05);
  transform: scale3d(1.05, 1.05, 1.05);
}

to {
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
}
`;
const IconContainer = styled.div`
  & > * {
    color: ${props => props.theme.colors.primary};
    width: 6rem;
    height: 6rem;
    &:hover {
      animation: ${pulse} 0.7s infinite;
    }
  }
`;

const Container = styled.div`
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-gap: 1rem;

  @media (max-width: ${props => props.theme.screenSize.oneThousand}) {
    grid-template-row: repeat(4, 1fr);
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileS}) {
    grid-template-columns: 1fr;
  }
`;

const Unit = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;

  & h4 {
    padding: 1rem 0;
    text-align: center;
  }
  & p {
    text-align: center;
  }
`;

const PropertyAmenities = () => {
  return (
    <>
      <Container1200>
        <H2Centered>Property Amenities</H2Centered>
      </Container1200>
      <Container>
        <Unit>
          <h4> Fridge & Stove </h4>
          <IconContainer>
            <FaWarehouse />
          </IconContainer>
        </Unit>
        <Unit>
          <h4> Secure Entry </h4>
          <IconContainer>
            <FaKey />
          </IconContainer>
        </Unit>
        <Unit>
          <h4> Air Conditioning </h4>
          <IconContainer>
            <FaSnowflake />
          </IconContainer>
        </Unit>
        <Unit>
          <h4> Elevator in Building </h4>
          <IconContainer>
            <FaWheelchair />
          </IconContainer>
        </Unit>
        <Unit>
          <h4> Balcony </h4>
          <IconContainer>
            <FaLandmark />
          </IconContainer>
        </Unit>
        <Unit>
          <h4> Free Laundry </h4>
          <IconContainer>
            <FaLeaf />
          </IconContainer>
        </Unit>
        <Unit>
          <h4> Cat Friendly </h4>
          <IconContainer>
            <FaCat />
          </IconContainer>
        </Unit>
        <Unit>
          <h4> Smoking Permitted </h4>
          <IconContainer>
            <FaSmoking />
          </IconContainer>
        </Unit>
      </Container>
    </>
  );
};

export default PropertyAmenities;
