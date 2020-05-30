import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import BackgroundImage from 'gatsby-background-image';
import * as Scroll from 'react-scroll';
import { H1 } from '../../reusableStyles/typography/Typography';
import { ButtonStyleWhiteHero } from '../../reusableStyles/buttons/Button';
import { HeroContent } from '../../reusableStyles/section0/MainCommunitySectionStyles';

const fadeInDown = keyframes`
from {
  opacity: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}

to {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
`;

const HeroBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  margin-top: -10vh;
  background: linear-gradient(
    90.26deg,
    rgba(33, 65, 96, 0.9) 33.8%,
    rgba(85, 187, 204, 0.61) 99.89%
  );
  background-size: cover;
  background-position: top;
  align-items: top;
  opacity: 1 !important;
  @media (max-width: ${props => props.theme.screenSize.nineHundred}) {
    height: 70vh;
  }
  @media (max-width: ${props => props.theme.screenSize.eightHundred}) {
    height: 60vh;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    height: 50vh;
  }
`;

const HeroContentContainer = styled.div`
  min-width: 30rem;
  position: absolute;
  margin-top: 10rem;
  top: 40%;
  left: 0%;
  transform: translate(0, -50%);
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    top: 30%;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
`;

export const Section0 = ({ fluid, property }) => {
  return (
    <HeroBackgroundImage fluid={fluid}>
      <HeroContentContainer>
        <HeroContent>
          <H1>
            {property.section0Title}
            <span>{property.section0Subtitle}</span>
          </H1>
          <address> {property.addressName} </address>
          <ButtonContainer>
            <Scroll.Link to="virtualTour" smooth={true} duration={500}>
              <ButtonStyleWhiteHero>
                Go To 360 Virtual Tour
              </ButtonStyleWhiteHero>
            </Scroll.Link>
          </ButtonContainer>
        </HeroContent>
      </HeroContentContainer>
    </HeroBackgroundImage>
  );
};
