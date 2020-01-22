import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import {
  Container,
  BlurbContainer,
  CustomH2,
  ImageContainer,
  StyledImage,
  CustomPHome,
  CustomButton,
} from './HomeStyling';

import NoStyleLink from '../Links/NoStyleLink';

const PropertyInfo = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "about.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Container>
      <ImageContainer>
        <StyledImage fluid={image.sharp.fluid} fadeIn={true} />
      </ImageContainer>
      <BlurbContainer>
        <CustomH2>Property Info</CustomH2>

        <CustomPHome>
          Few word argue that, ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum
        </CustomPHome>

        <CustomPHome>
          <span> Property Name: Blue Quill Pointe</span>
        </CustomPHome>
        <CustomPHome>
          <span> Category: Apartment</span>
        </CustomPHome>
        <CustomPHome>
          <span> Move In Date: Now</span>
        </CustomPHome>
        <CustomPHome>Pets : Cat Friendly</CustomPHome>

        <CustomButton>
          <NoStyleLink to="/contact">Get Details</NoStyleLink>
        </CustomButton>
      </BlurbContainer>
    </Container>
  );
};

export default PropertyInfo;
