import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Bold } from '../reusableStyles/typography/Typography';
import {
  Container,
  BlurbContainer,
  CustomH2,
  CustomP,
  ImageContainer,
  StyledImage,
  CustomPHome,
} from './HomeStyling';
import { ButtonStyle2 } from '../reusableStyles/buttons/Button';
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

        <ButtonStyle2>
          <NoStyleLink to="/recipes">View Recipes</NoStyleLink>
        </ButtonStyle2>
      </BlurbContainer>
    </Container>
  );
};

export default PropertyInfo;
