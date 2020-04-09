import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import BackgroundImage from 'gatsby-background-image';
import { H1 } from '../../reusableStyles/typography/Typography';
import { ButtonStyleWhiteHero } from '../../reusableStyles/buttons/Button';

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
const HeroContent = styled.div`
  display: flex;
  flex-direction: column;

  color: ${props => props.theme.colors.white};

  margin: 0 auto;

  padding: 3rem;
  border-top-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  & ${H1} {
    color: ${props => props.theme.colors.white};
    font-weight: 100;
    text-transform:uppercase;
 text-align:left;
    animation: ${fadeInDown} 0.4s;

      (max-width: ${props => props.theme.screenSize.mobileL}) {
      font-size: 3rem;
      line-height:2.9rem;
    
    }
  }


  & address {
    font-weight: 500;
    padding: 2rem 0;
    animation: ${fadeInDown} 0.3s;
    animation-fill-mode: both;
    animation-delay: .7s;
    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      display: none;
    }
  }
  & ${ButtonStyleWhiteHero} {
   
    animation: ${fadeInDown} 0.2s;
    animation-fill-mode: both;
    animation-delay: 1s;
    align-self:flex-start;
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
          <H1>{property.section0Title}</H1>
          <address> {property.addressName} </address>
          <ButtonContainer>
            <ButtonStyleWhiteHero>Take a Tour</ButtonStyleWhiteHero>
          </ButtonContainer>
        </HeroContent>
      </HeroContentContainer>
    </HeroBackgroundImage>
  );
};
