import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

import { FaSocks, FaKey, FaCat, FaSun } from 'react-icons/fa';
import { H2Centered } from '../../reusableStyles/typography/Typography';
import { Container1200 } from '../../reusableStyles/sections/Sections';
import { PropertyBulletPoints } from '../PropertyBulletPoints';

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

  grid-gap: 1rem;

  @media (max-width: ${props => props.theme.screenSize.oneThousand}) {
    grid-template-row: repeat(4, 1fr);
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

export const PropertyAmenitiesCypress = ({ property }) => {
  return (
    <>
      <Container1200>
        <StyledH2Centered>{property.section2title}</StyledH2Centered>
        <Blurb>
          <p>{property.section2blurb.section2blurb}</p>
        </Blurb>
      </Container1200>
      <Container>
        <Unit>
          <IconContainer>
            <FaKey />
          </IconContainer>
          <h4> Secure Entry </h4>
        </Unit>

        <Unit>
          <IconContainer>
            <FaCat />
          </IconContainer>
          <h4> Pet Friendly (upon approval) </h4>
        </Unit>
        <Unit>
          <IconContainer>
            <FaSun />
          </IconContainer>
          <h4> Balcony (select suites) </h4>
        </Unit>
        <Unit>
          <IconContainer>
            <FaSocks />
          </IconContainer>
          <h4> In-Suite Laundry </h4>
        </Unit>
      </Container>
      <PropertyBulletPoints property={property} />
    </>
  );
};
