import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

import {
  FaUtensils,
  FaKey,
  FaSnowflake,
  FaWheelchair,
  FaLeaf,
  FaSmoking,
  FaCat,
  FaSun,
} from 'react-icons/fa';
import { H2Centered } from '../reusableStyles/typography/Typography';
import { Container1200 } from '../reusableStyles/sections/Sections';
import { PropertyBulletPoints } from './PropertyBulletPoints';

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
    color: ${props => props.theme.colors.secondary};
  }
  & p {
    text-align: center;
  }
`;

const StyledH2Centered = styled(H2Centered)`
  color: ${props => props.theme.colors.primary};
`;

const Blurb = styled.div`
  margin: 1rem;
  & p {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    opacity: 0.85;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const PropertyAmenities = () => {
  return (
    <>
      <Container1200>
        <StyledH2Centered>Property Amenities</StyledH2Centered>
        <Blurb>
          <p>
            Blue Quill Pointe is a well-maintained building with on-site
            management to efficiently address any concerns that may arise during
            your tenancy with us. Our suites are refinished and clean, and we
            offer spacious one and two-bedroom layouts featuring the following
            available property amenities:
          </p>
        </Blurb>
      </Container1200>
      <Container>
        <Unit>
          <IconContainer>
            <FaUtensils />
          </IconContainer>
          <h4> Fridge & Stove </h4>
        </Unit>
        <Unit>
          <IconContainer>
            <FaKey />
          </IconContainer>
          <h4> Secure Entry </h4>
        </Unit>
        <Unit>
          <IconContainer>
            <FaSnowflake />
          </IconContainer>
          <h4> Air Conditioning </h4>
        </Unit>
        <Unit>
          <IconContainer>
            <FaWheelchair />
          </IconContainer>
          <h4> Elevator in Building </h4>
        </Unit>
        <Unit>
          <IconContainer>
            <FaSun />
          </IconContainer>
          <h4> Balcony </h4>
        </Unit>
        <Unit>
          <IconContainer>
            <FaLeaf />
          </IconContainer>
          <h4> Free Laundry </h4>
        </Unit>
        <Unit>
          <IconContainer>
            <FaCat />
          </IconContainer>
          <h4> Cat Friendly </h4>
        </Unit>
        <Unit>
          <IconContainer>
            <FaSmoking />
          </IconContainer>
          <h4> Smoking Permitted </h4>
        </Unit>
      </Container>
      <PropertyBulletPoints />
    </>
  );
};

export default PropertyAmenities;
