import React from 'react';
import styled from '@emotion/styled';

import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { keyframes } from '@emotion/core';

import LayoutBlueQuillPoint from '../components/layouts/LayoutBlueQuillPoint';
import { H1 } from '../components/reusableStyles/typography/Typography';
import { ButtonStyle2Large } from '../components/reusableStyles/buttons/Button';
import {
  Section,
  Container1200,
  SectionGrey,
} from '../components/reusableStyles/sections/Sections';
import PropertyInfo from '../components/home/PropertyInfo';
import PropertyAmenities from '../components/home/PropertyAmenities';
import PropertyGallery from '../components/home/PropertyGallery';
import PropertyReview from '../components/home/PropertyReview';
import Map1 from '../components/mapbox/Map1';

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

export const query = graphql`
  {
    heroImage: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const HeroBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100vh;
  margin-top: -10vh;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
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
    height: 40vh;
  }
  @media (max-width: ${props => props.theme.screenSize.mobileS}) {
    height: 35vh;
  }
`;

const HeroContentContainer = styled.div`
  min-width: 30rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.white};
  max-width: 80rem;
  margin: 0 auto;

  padding: 3rem;
  border-top-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  & ${H1} {
    color: ${props => props.theme.colors.white};
    font-weight: 100;
    font-size: 7rem;
    animation: ${fadeInDown} 0.4s;
 ;
      (max-width: ${props => props.theme.screenSize.mobileL}) {
      font-size: 4rem;
    }
  }
  & span {
    font-weight: 500;
    padding: 2rem 0;
    animation: ${fadeInDown} 0.3s;
    animation-fill-mode: both;
    animation-delay: .7s;
    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      display: none;
    }
  }
  & ${ButtonStyle2Large} {
   
    animation: ${fadeInDown} 0.2s;
    animation-fill-mode: both;
    animation-delay: 1s;
    border-radius: 0;
    font-size: 1.8rem;
    font-weight: 100;
  }
`;

const BlueQuillPointe = ({ data }) => {
  return (
    <LayoutBlueQuillPoint>
      <HeroBackgroundImage fluid={data.heroImage.childImageSharp.fluid}>
        <HeroContentContainer>
          <HeroContent>
            <H1>Modern Affordable Housing</H1>
            <span> 11615 28 Ave NW, Edmonton, AB T6J 4G2 </span>
            <ButtonStyle2Large>Take a Tour</ButtonStyle2Large>
          </HeroContent>
        </HeroContentContainer>
      </HeroBackgroundImage>

      <Section>
        <Container1200>
          <PropertyInfo />
        </Container1200>
      </Section>
      <SectionGrey>
        <Container1200>
          <PropertyAmenities />
        </Container1200>
      </SectionGrey>
      <Section>
        <PropertyGallery />
      </Section>
      <SectionGrey>
        <Container1200>
          <PropertyReview />
        </Container1200>
      </SectionGrey>
      <Section>
        <Container1200>
          <Map1
            title={`Our Locations`}
            mapStyle="mapbox://styles/arhoy/ck5n2qqyf0i0v1inwxwapkl7c"
            width="100%"
            height="50vh"
          />
        </Container1200>
      </Section>
    </LayoutBlueQuillPoint>
  );
};
export default BlueQuillPointe;
